import React, {
  createContext,
  ReactNode,
  useEffect,
  useMemo,
  useState,
  Dispatch,
  SetStateAction
} from 'react'

interface IDataHome {
  apresentacao: string
  descricao: string
  profile: string
}

interface IData {
  dataHome: IDataHome
  setDataHome: Dispatch<SetStateAction<IDataHome>>
  loading: boolean
}

export const HomeContext = createContext<IData>({} as IData)

function HomeContextProvider({ children }: { children: ReactNode }) {
  const [dataHome, setDataHome] = useState({} as IDataHome)
  const [loading, setLoading] = useState(true)

  async function getDataHome() {
    setLoading(true)
    await fetch('https://swnxabum.directus.app/items/Home')
      .then(async (response) => {
        const { data } = await response.json()
        setDataHome(data[0])
      })
      .catch(() => {
        // fazer o catch com Swal
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    setLoading(true)
    getDataHome()
  }, [])

  const data: IData = useMemo(
    () => ({
      dataHome,
      setDataHome,
      loading
    }),
    [dataHome, setDataHome, loading]
  )

  return <HomeContext.Provider value={data}>{children}</HomeContext.Provider>
}

export { HomeContextProvider }
