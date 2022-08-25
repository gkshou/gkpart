import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    video: {
        position: "relative",
        width: "960px",
        height: "544px",
        objectFit: "cover",
},
    content: {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
    },
main:{
     display: "fix",
    width: "100%",
    height: "100%",
},
    right:{
        width: "300px",
        height: "544px",
    }
});

export { useStyles };