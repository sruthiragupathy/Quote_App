import { makeStyles } from '@material-ui/core/styles';



export default makeStyles({
    wrapper:{
        width:'100%',
        height:'100vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    container:{
        width:'30rem',
        height:'35rem',
        border:'1px solid #BDBDBD',
        borderRadius:'2rem',
        padding:'3rem 3rem',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'

    },
    login:{
        padding:'0.625rem',
        width:'100%',
        fontFamily: 'Noto Sans',
        fontWeight:'600',
        fontSize:'1.125rem',
        color:'#333333',
        marginBottom:'1.703rem',
        display:'flex',
        justifyContent:'flex-start'
    },
    field:{
        width:'22.8rem',
        height:'3rem',
        marginBottom:'1.503rem',
        borderRadius:'0.5rem'
    },
    btn:{
        width:'22.8rem',
        height:'2.375rem',
        background:'#2F80ED',
        color:'white',
        fontFamily: 'Noto Sans',
        fontWeight:600,
        textTransform:'capitalize',
        marginTop:'0.5rem',
        marginBottom:'2.04125rem',
        borderRadius:'0.5rem',
        textDecoration:'none',

    },
    
})


