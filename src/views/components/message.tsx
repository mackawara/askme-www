
import { Avatar, Grid, Typography } from '@mui/material'
import { Message } from '../../types'
import { colors } from '../../constants/colors'
import { FONT_FAMILIES } from '../../constants/fonts'

const MessageComponent: React.FC<Message> = ({ content, type }) => {
    return (<Grid container columnSpacing={1} sx={{ width: '100%', display: 'flex', height: 'content', alignItems: 'center', margin: '8px 0 8px', backgroundColor: type === 'system' ? colors.lightBackground : colors.shadow, borderRadius: '8px', padding: '8px' }}>
        <Grid item xs={2} sx={{ alignItems: 'flex-start', border: '1px solid red', display: 'flex', flexDirection: 'column' }}>
            <Avatar sx={{ bgcolor: type == 'system' ? colors.specialBackground : colors.border, color: type == 'system' ? colors.border : colors.specialBackground }}>{type == 'system' ? 'S' : 'U'}</Avatar>
            <Typography >{type == 'system' ? 'AskME_AI' : 'user'}</Typography>
        </Grid>
        <Grid item xs={10} sx={{ border: '1px solid red' }} >
            <Typography fontFamily={FONT_FAMILIES.openSans} color={colors.color} textAlign={'left'} >{content}</Typography>
        </Grid>
    </Grid >
    )
}
export default MessageComponent