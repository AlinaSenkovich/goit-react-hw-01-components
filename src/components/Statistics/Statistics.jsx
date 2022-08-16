import { StatItem } from 'components/Statistics/Statistics.styled';
import PropTypes from 'prop-types';
import styles from './statistical.module.css';
import { StatisticsTitle } from 'components/Statistics/Statistics.styled';
import { Box } from 'components/Box';

export const Statistics = ({ title, stats }) => {
  return (
  <Box>
    {title && <StatisticsTitle>{title}</StatisticsTitle>} 
    <section className={styles.statistics}>
      
      <ul className={styles.stat_list}>
        {stats.map(stat => (
          <StatItem className={styles.item} key={stat.id}>
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </StatItem>
        ))}
      </ul>
      </section>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
