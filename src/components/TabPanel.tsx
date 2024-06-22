import { styled } from '@mui/system';
import colors from '../constants/colors';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';

// Borrowed from https://mui.com/base-ui/react-tabs/#system-UnstyledTabsIntroduction.tsx
const TabPanel = styled(BaseTabPanel)(
    ({ theme }) => `
    width: 100%;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    padding: 20px 12px;
    background: ${theme.palette.mode === 'dark' ? colors.gray[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? colors.gray[700] : colors.gray[200]};
    border-radius: 12px;
    background-color: rgba(255, 255, 255, 0.7); /* alpha mask */
    `,
  );

export default TabPanel;
