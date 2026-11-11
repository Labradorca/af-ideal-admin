import { mockFail, mockOk } from '@/mock/response'
import { mockAdaptersEnabled } from '../../config/data-mode'

export default ({ mock, setup }: { mock?: boolean; setup: () => void }) => {
  if (mock !== false && mockAdaptersEnabled) setup()
}

export const responseWrap = <T>(data: T) => mockOk(data)

export const failedResponseWrap = (data: unknown, msg: string, code = 500) => ({
  ...mockFail(msg, code, data),
})
