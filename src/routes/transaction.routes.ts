import { Router } from 'express';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';

const transactionRouter = Router();

const transactionsRepository = new TransactionsRepository();

transactionRouter.get('/', (request, response) => {
  const createTransactionService = new CreateTransactionService(
    transactionsRepository,
  );

  try {
    const { title, value, type } = request.body;
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
