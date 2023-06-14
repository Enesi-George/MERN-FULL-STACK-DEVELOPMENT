import { Paper,Box, Grid } from '@mui/material'


export const Item = ({item})=>{
    return (
        
            <Grid sx={{boxShadow:"none"}}>
            <Grid item sm={12} xs={12}  >
            <img src={item.image} alt={item.name} sm={12} xs={12} width={1200} height={500} sx={{objectFit: "cover", width:"100%", height:"600px"}}/>
            </Grid>
        </Grid>
    

    )
}