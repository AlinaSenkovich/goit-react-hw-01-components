import { StatisticsTitle, StatItem, StatList } from 'components/Statistics/Statistics.styled';
import PropTypes from 'prop-types';
import {Box} from '../Box';

export const Statistics = ({title, stats}) => {
    return (
       <>
        <Box 
            display="flex"
            flexDirection="column"
            alignItems="centr"
            mb="40px">
            {title && <StatisticsTitle>{title}</StatisticsTitle>}
            <StatList>
                {stats.map(({id, label, percentage}) => (
                    <StatItem key={id}>
                        <span className='label'>{label}</span>
                        <span className='ptrcentage'>{percentage}</span>
                    </StatItem>
                )
                )}
            </StatList>
            
        </Box>
       </>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }))
}