import { makeStyles } from "@material-ui/core"

const useStyle = makeStyles({

    movie__detail: {
        // backgroundImage: 'url("../img/mobile/backapp.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // color: 'white',
        height: 650,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    movie__img: {
        width: '30%',
        height: '400px',
    },

    movie__name: {
        textAlign: 'center',
    },

    movie__rating: {
        width: '200px',
        height: '200px',
        lineHeight: '200px',
        textAlign: "center",
        border: '2px solid black',
        borderRadius: '50%',

    }

})
export default useStyle