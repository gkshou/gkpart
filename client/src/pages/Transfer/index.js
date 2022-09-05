import { useDispatch, useSelector } from "react-redux";
import React, {useEffect, useState} from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import { useStyles } from "./styles.js";
import DropZone from "../../components/DropZone";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import {removeSelectedNft, selectedNft} from "../../redux/actions/nftActions";
import Grid from "@material-ui/core/Grid";

const Transfer =()=> {
    const { nftId } = useParams();
    const history = useHistory();
    const artTokenContract = useSelector(
        (state) => state.allNft.artTokenContract
    );
    const classes = useStyles();
    const account = useSelector((state) => state.allNft.account);
    const marketplaceContract = useSelector(
        (state) => state.allNft.marketplaceContract
    );
    const [formData, setFormData] = useState({
        receiveAddress: "",
    });
    let nft = useSelector((state) => state.nft);
    let nftItem = useSelector((state) =>
        state.allNft.nft.filter((nft) => nft.tokenId === nftId)
    );
    const {
        image,
        name,
        price,
        owner,
        creator,
        description,
        duration,
        tokenId,
        saleId,
        isForSale,
        isSold,
        isTransfer,
    } = nft;
    const dispatch = useDispatch();
    function handleInputChange(event) {
        let { name, value } = event.target;
        // if(name === 'image'){
        //   value = event.target.files[0];
        // }
        setFormData({ ...formData, [name]: value });
    }

    async function transferItem(event){
        event.preventDefault();
        console.log(formData)
        try {
            const receipt = await artTokenContract.methods
                .safeTransferFrom(account,formData.receiveAddress,tokenId)
                .send({ gas: 210000, from: account });
                nft.isTransfer = true;
        } catch (error) {
            console.error("Error, transfering: ", error);
            alert("Error while transfering!");
        }
    }
    useEffect(() => {

        if (nftId && nftId !== "" && nftItem) dispatch(selectedNft(nftItem[0]));
        return () => {
            dispatch(removeSelectedNft());
        };
    }, [nftId]);


    return (
        <div className={classes.pageTransferNFTs} >
            <form onSubmit={transferItem}>
                <div className={classes.formHeader}>
                    <h1>Transfer NFT</h1>
                    <Link to="/">
                        <CancelOutlinedIcon fontSize="large" />
                    </Link>
                </div>
                <div className={classes.content}>
                    <fieldset>
                        <Grid item md={14} sm={14} xs={12}>
                            <figure>
                                <img className="ui fluid image" src={image} />
                            </figure>
                        </Grid>
                        <TextField
                            label="接收者地址"
                            name="receiveAddress"
                            variant="filled"
                            required
                            value={formData.receiveAddress}
                            onChange={handleInputChange}
                            fullWidth
                        />

                        <Button variant="contained" color="primary" type="submit">
                            Transfer NFT
                        </Button>
                    </fieldset>
                </div>
            </form>
        </div>)
};
export default Transfer;