import { makeStyles } from "@material-ui/core"

const useStyle = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

    ul: {
        listStyle: 'none'
    },
    movieDetail: {
        // background: 'linear-gradient(to top, rgb(10, 32, 41), transparent 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '600px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        color: 'white',
    },
    blur: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        background: 'linear-gradient(to top, rgb(10, 32, 41), transparent 100%)',
    },
    movieImg: {
        paddingLeft: '70px',
        paddingRight: '20px',
        '& img': {
            height: '350px',
            borderRadius: '10px'
        },
    },
    movieRating: {
        width: '120px',
        height: '120px',
        border: '9px solid gray',
        borderRadius: '50%',
        lineHeight: '108px',
        textAlign: 'center',
        margin: '0 auto',
        fontWeight: 'bold',
        fontSize: '60px'
    },

    nameTheater: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        '& img': {
            width: '50px',
            height: '50px',
            marginRight: '20px'
        }
    },

    movieInfo: {
        color: 'white',
        fontWeight: 'bold',
        width: '50%',
        margin: '0 auto',
        justifyContent: 'space-around',
        marginBottom: '45px'
    }

}))
export default useStyle