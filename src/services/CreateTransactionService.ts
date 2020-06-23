import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: Omit<Transaction, 'id'>): Transaction {
    // TODO

    const { total } = this.transactionsRepository.getBalance();

    if (type === 'outcome' && total < value) {
      throw Error('Can not create outcome transaction without balance');
    }

    const transation = this.transactionsRepository.create({
      title,
      value,
      type,
    });

    return transation;
  }
}

export default CreateTransactionService;
