import { Heading, Stack, Text } from 'chakbox-ui'

import { DemoSection } from '../components/DemoSection'
import { CARD_LIST_CODE, CardListDemo } from './interaction/CardListDemo'

export function InteractionPage() {
  return (
    <Stack gap={24} maxW={960}>
      <Stack gap={8}>
        <Heading as="h2" fontSize={24}>
          交互状态
        </Heading>
        <Text color="#666">_hover 等伪类 props</Text>
      </Stack>

      <DemoSection title="卡片列表" description="_hover 伪类状态" code={CARD_LIST_CODE}>
        <CardListDemo />
      </DemoSection>
    </Stack>
  )
}
