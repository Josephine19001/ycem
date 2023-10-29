import { useMediaQuery } from 'usehooks-ts'

const useSmallerScreens = () => {
  const matches = useMediaQuery('(max-width: 768px)')

  return matches || false
}

export default useSmallerScreens