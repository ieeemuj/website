import {
  HStack, VStack,
} from '@chakra-ui/react';
import GlobalPlanBox from './GlobalPlanBox';
import PlanBox from './PlanBox';

const Plans = () => (
  <VStack
    height="100%"
    width="100%"
    spacing="5"
    justify="space-around"
  >
    <HStack
      width="100%"
      height="100%"
      justify="space-around"
      spacing="5"
    >
      <PlanBox cost={300} duration="1 year" />
      <PlanBox cost={500} duration="2 years" />
    </HStack>

    <GlobalPlanBox cost={12.5} duration="2 years" />
  </VStack>
);

export default Plans;
