import { makeStyles } from "@material-ui/core"

const useStyle = makeStyles(footer => ({

    mobileApp: {
        backgroundImage: 'url("../img/mobile/backapp.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        height: 650,
    },
    mobileApp__right: {
        backgroundImage: 'url("../img/mobile/mobile.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: 7,
        width: '50%',
        margin: '0 auto',
    },
    mainMaxWidth: {
        maxWidth: 940,
        margin: 'auto',
        paddingTop: 60,
        paddingBottom: 60,
    },
    mobileApp__left: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& a': {
            color: 'white',
        },
    },
    textLeft: {
        fontWeight: 700,
        fontSize: 30,
    },

    'slick-mobile': {
        '& img': {
            width: '100%',
            height: '100%',
            display: 'block',
            borderRadius: 20
        },
    }
}))
export default useStyle