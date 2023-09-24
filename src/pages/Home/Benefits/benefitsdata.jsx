import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import SpeedIcon from '@mui/icons-material/Speed';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ConstructionIcon from '@mui/icons-material/Construction';


export const benefitsData =

[
    {
        icon:(size)=><EnergySavingsLeafIcon sx={{fontSize:size}}/>,
        description:"Eco Freindly"
    },
    {
        icon:(size)=><SpeedIcon sx={{fontSize:size}}/>,
        description:"Fast"
    },
    {
        icon:(size)=><VolunteerActivismIcon sx={{fontSize:size}}/>,
        description:"Energy Saving"
    },
    {
        icon:(size)=><CurrencyExchangeIcon sx={{fontSize:size}}/>,
        description:"Reasonable"
    },
    {
        icon:(size)=><ConstructionIcon sx={{fontSize:size}}/>,
        description:"Custom Build"
    },
] 