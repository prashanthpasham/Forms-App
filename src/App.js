import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Test from './Test';
import FormikControl from './components/FormikControl';
import { useEffect, useState } from 'react';
const initialValues = {

}
const onSubmit = values => {
  console.log(values);
}
//const validationSchema = 

function App() {
  const [fields, setFields] = useState([]);
  const [loading,setLoading]=useState(true);
  const [schema,setSchema] = useState(Yup.object().shape({ 
    
  }));
  useEffect(() => {
    let data = JSON.parse(JSON.stringify(Test.Fields));
    var schemaObj = {};
    for (var k = 0; k < data.length; k++) {
      let dt = data[k];
      let yp = Yup.string().min(dt.type.minlength, dt.name + " must be minimum of " + dt.type.minlength + " characters!")
      .max(dt.type.maxlength, dt.name + " must be maximum of " + dt.type.maxlength + " characters!");
     
      if (dt.required) {
        yp= yp.required(dt.name + " must be required!");
      }
     
        schemaObj[dt.name] =yp;
    }
   // console.log("sch obj>>"+JSON.stringify(schemaObj));
    setSchema(Yup.object().shape(schemaObj));
    setFields(data);
    setLoading(false);
    console.log("fields");
  }, []);
  useEffect(() => {
    console.log("schema>>"+schema);
    
  }, [schema])
  return (
    <div className="col-md-6">
      {
   
      loading? <h1>Loading...</h1>:   
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={schema} >
        <Form>
          {
            console.log("called"),
            fields.map((field) => {
              return (
                <FormikControl key={field.name} control={field.type.view} type={field.type.inputtype} name={field.name} label={field.title} readonly={field.radonly}
                />)
            })
          }
        </Form>
      </Formik>
}
    </div>
  );
}

export default App;
