import './App.css';
import Weather from "./Weather";
import form from "./form";



function App() {

  

  const cityes = [
    {
      city_name: 'Tokyo',
      color_name: 'blue'
    },
    {
      city_name: 'London',
      color_name: 'yellow'
    },
    {
      city_name: 'Paris',
      color_name: 'green'
    },
    {
      city_name: 'los Angeles',
      color_name: 'red'
    },
    {
      city_name: 'Moscow',
      color_name: 'purple'
    },
    {
      city_name: 'Sydney',
      color_name: 'pink'
    },
  ]
  return (
    
    <div>
      <form className="m-8 ">
          <label>
            Name:
            <input type="text" className="border-2 border-blue-300 hover:border-blue-700" />
          </label>
          <input type="submit" value="search" className="border-2 border-red-300 hover:border-red-600" />
          </form>

      <div className="min-h-screen flex justify-center items-center flex-wrap">
        
        {
          cityes.map((city,index) => 
          <Weather
          key={index} 
          city_name={city.city_name}
          color_name={city.color_name}
          />
          )
        }
      </div>
    </div>
  );
}

export default App;
