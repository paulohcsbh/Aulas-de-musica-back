import app, { initRedis } from "./app";

initRedis().then(() => {
    console.log('Redis was started!');
  });
  

const port = process.env.PORT || 5000;    
app.listen(5000, () => {
    console.log(`Server running in port ${port}`)
});