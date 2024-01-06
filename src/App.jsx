import { Data } from "./Helpers/Data"


function App() {

  const {data} = Data();

  console.log(data)

  return (
    <>
      {data.map(datos => {
        return (
          <div key={datos.id}>
            <h2>{datos.name}</h2>
            <img src={datos.logo} alt="" />
            <br />
            {datos.teaches.languages.map(language => (
              <img key={language.name} src={language.logo} alt={language.name} style={{width: '50px', padding: '0px 10px'}}/>
            ))}
            <br />
            {datos.teaches.frameworks.map(frameworks => (
              <img key={frameworks.name} src={frameworks.logo} alt={frameworks.name} style={{width: '50px', padding: '0px 10px'}}/>
            ))}
            <br />
            {datos.teaches.queryLanguajes.map(query => (
              <img key={query.name} src={query.logo} alt={query.name} style={{width: '50px', padding: '0px 10px'}}/>
            ))}
            <br />
            {datos.teaches.ide.map(ide => (
              <img key={ide.name} src={ide.logo} alt={ide.name} style={{width: '50px', padding: '0px 10px'}}/>
            ))}
          </div>
        )
      })}
    </>
  )
}

export default App
