import { makeStyles } from "@material-ui/core"

const useStyle = makeStyles({

    card__booking: {
        display: 'none',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        fontSize: '15px',
        fontWeight: 'bold',
        backgroundColor: 'red',
        transition: 'all 0.2s',
        // '&:hover $card__footer': {
        //     padding: 0
        // }
    },
    itemMovie: {
        padding: '40px 20px',
        cursor: 'pointer',

        '&:hover p': {
            display: 'none'
        },
        '&:hover button': {
            display: 'block'
        },
    },

    card: {
        minHeight: '350px',
        border: 'none',
        borderRadius: '10px',
        height: '300px',
        paddingBottom: '20px',
        position: 'relative',
        '& img': {
            width: '100%',
            height: '100%',
            borderRadius: '10px',
        }
    },

    card__footer: {
        minHeight: '70px',
        backgroundColor: 'transparent',
        border: 'none',
        '& p': {
            fontSize: '15px',
            fontWeight: 'bold',
            marginBottom: '0px'
        }
    },

    card__rating: {
        position: 'absolute',
        top: '12px',
        right: '12px',
        backgroundColor: 'rgba(12,27,54,.8)',
        padding: '2px',
        fontSize: '16px',
        border: '1px solid #1f2e46',
        borderRadius: '4px',
        color: '#fff',
        width: '54px',
        height: '40px',
        lineHeight: '40px',
        textAlign: 'center',
        fontWeight: 'bold',
        zIndex: '2'
    },

    card__img: {
        width: '100%',
        height: '100%',
        position: 'relative',
        '&:hover i': {
            display: 'block',
            opacity: 1
        }
    },

    over__lay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'transparent',
        transition: 'all 0.2s',
        opacity: 0,
        borderRadius: '10px',
        '&:hover': {
            opacity: 1,
            background: 'linear-gradient(to top,#000,transparent 100%)',
        }
    },

    prev: {
        border: 'none',
        backgroundColor: 'transparent',
        position: 'absolute',
        left: '-80px',
        top: '38%',
        '&:focus': {
            outline: 'none'
        }
    },

    next: {
        border: 'none',
        backgroundColor: 'transparent',
        position: 'absolute',
        right: '-80px',
        top: '38%',
        '&:focus': {
            outline: 'none'
        }
    },

    showTime__Item: {
        position: 'relative',
        '&:hover i': {
            display: 'block',
            opacity: 1
        }
    },

    play: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        border: '2px solid white',
        borderRadius: '50%',
        transition: 'all 0.2s',
        opacity: 0,
        zIndex: 2,
        color: 'white',
        display: 'none',
        cursor: 'pointer'
    },

    closeButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        transform: "translate(50%,-50%)",

        border: '2px solid white',
        '&:focus': {
            outline: 'none'
        },
        '&:hover': { opacity: 0.7 },
        transition: "all .2s",

    },
    downRangeSm: {
        width: "598px",
        height: "336px"
    },
    upKeyMd: {
        width: "898px",
        height: "505px"
    },

})
export default useStyle