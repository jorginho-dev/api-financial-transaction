import { response } from 'express';
import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO

    const initialValue = 0;

    const income = this.transactions.reduce(
      (accumulator, currentValue) =>
        currentValue.type === 'income'
          ? accumulator + currentValue.value
          : accumulator + 0,
      initialValue,
    );

    const outcome = this.transactions.reduce(
      (accumulator, currentValue) =>
        currentValue.type === 'outcome'
          ? accumulator + currentValue.value
          : accumulator + 0,
      initialValue,
    );

    const total = income - outcome;

    const balance = {
      income,
      outcome,
      total,
    };
    return balance;
  }

  public create({ title, value, type }: Omit<Transaction, 'id'>): Transaction {
    // TODO
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
