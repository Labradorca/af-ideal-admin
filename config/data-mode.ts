export const resolveDataMode = (
  isDevelopment: boolean,
  selectedMode?: string,
  allowPublicMockDemo = false
): 'mock' | 'reference' => {
  if (!isDevelopment && !allowPublicMockDemo) return 'reference'
  if (
    selectedMode === undefined ||
    selectedMode === '' ||
    selectedMode === 'mock'
  ) {
    return 'mock'
  }
  if (selectedMode === 'reference') return 'reference'
  throw new Error('Unsupported VITE_DATA_MODE')
}

const isDevelopment = import.meta.env.DEV
const allowPublicMockDemo = import.meta.env.VITE_PUBLIC_MOCK_DEMO === 'true'

export const dataMode = resolveDataMode(
  isDevelopment,
  import.meta.env.VITE_DATA_MODE,
  allowPublicMockDemo
)

export const mockAdaptersEnabled =
  (isDevelopment || allowPublicMockDemo) && dataMode === 'mock'
