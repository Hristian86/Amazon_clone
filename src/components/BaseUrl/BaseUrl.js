const url = (parametar) => {
    const hostedUrl = "https://postgres-pgadmin-app.herokuapp.com/api/";
    const localUrl = "http://localhost:3002/api/";
    const asdKestrel = "https://localhost:5001/api/RegisterCodeModels";
    const aspDotNetCore = "https://localhost:44318/"

    const herokuDotNet = "https://amazion.herokuapp.com/";

    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        // dev code
        return herokuDotNet + parametar;
    } else {
        // production code
        return herokuDotNet + parametar;
    }
}

export default url;