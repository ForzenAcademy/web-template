import express from 'express';

const port: number = 3000;
const app = express();

// Incoming request type parsing, use the top line for Form data
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Api endpoints
// Test code below for use cases
// app.get('/testdomain/', testhtml.invoke);
// app.get('/facts/', getFactsUseCase.invoke);
// app.post('/publish/', publishFactUseCase.invoke);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
