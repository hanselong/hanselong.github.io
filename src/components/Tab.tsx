import { styled } from '@mui/system';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';
import colors from '../constants/colors';
import { buttonClasses } from '@mui/base/Button';

// Borrowed from https://mui.com/base-ui/react-tabs/#system-UnstyledTabsIntroduction.tsx
const Tab = styled(BaseTab)`
  font-family: 'IBM Plex Sans', sans-serif;
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  padding: 10px 12px;
  margin: 6px;
  border: none;
  border-radius: 50px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${colors.blue[400]};
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${colors.blue[200]};
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: ${colors.blue[600]};
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default Tab;
