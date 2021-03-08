import { makeStyles } from "@material-ui/core"

const useStyle = makeStyles(footer => ({

    logo: {
        width: '30px',
        height: '30px',
        borderRadius: '50%',
    },

    footer: {
        backgroundColor: '#222',
        color: 'white',
        fontSize: '12px',
        padding: '20px 0',
        '& a': {
            color: '#949494',
            display: 'block',
        }
    },

    footer__up: {
        maxWidth: '940px',
        margin: 'auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)'
    },

    footer__tix: {
        fontWeight: '700',
        paddingRight: '55px'
    },

    tix__text: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    company__logo: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '15px',
        width: '75%',
        justifyContent: 'space-between',
        '& img': {
            backgroundColor: 'white',
            borderRadius: '50%'
        }
    },

    footer__social: {
        display: 'flex',
        justifyContent: 'space-around',
        textAlign: 'center',
    },
    social__width: {
        width: '30%'
    },
    /* footer-down */
    footer__down: {
        maxWidth: '940px',
        margin: 'auto',
        paddingTop: '20px',
        position: 'relative',
        '&::before': {
            content: "",
            width: '100%',
            height: '1px',
            backgroundColor: 'white',
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
        }
    },

    down__left: {
        width: '10 %',
        '& img': {
            width: '100 %',
            borderRadius: '10px'
        }
    },

    down__middle: {
        width: '70 %',
        paddingLeft: '15px',
        '& span': {
            display: 'block',
            color: '#949494'
        }
    },

    down__right: {
        width: '20 %',
        '& img': {
            width: '130px',
            float: 'right'
        }
    }
}))
export default useStyle