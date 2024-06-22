import { styled } from '@mui/system';
import colors from '../constants/colors';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';

// Borrowed from https://mui.com/base-ui/react-tabs/#system-UnstyledTabsIntroduction.tsx
const TabsList = styled(BaseTabsList)(
    ({ theme }) => `
    background-color: ${colors.blue[500]};
    border-radius: 50px;
    margin-bottom: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? colors.gray[900] : colors.gray[200]};
    `,
  );

  export default TabsList;