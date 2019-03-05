import express from 'express';
import bodyParser from 'body-parser';

//routes
import mealRoutes from './routes/meal.route';
import orderRoutes from './routes/order.route';
import menuRoutes from './routes/menu.route';

const app = express();
const port = parseInt(process.env.PORT, 10) || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome, to your app server');
});

app.use('/api/v1/meals', mealRoutes);
app.use('/api/v1/orders', orderRoutes);
app.use('/api/v1/menu', menuRoutes);

app.listen(port, () => console.log(`Server is up on port ${port}...`));

//module.exports = app;
export default app;