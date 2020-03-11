import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      adress: Yup.string().required(),
      number: Yup.string().required(),
      complement: Yup.string().required(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      zipCode: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Campos inválidos!' });
    }

    const recipientExsist = await Recipient.findOne({
      where: { name: req.body.name },
    });

    if (recipientExsist) {
      return res.status(400).json({ error: 'Recipiente já existe!' });
    }

    const recipient = await Recipient.create(req.body);

    return res.status(200).json(recipient);
  }

  async update(req, res) {
    return res.status(200).json('ok');
  }
}

export default new RecipientController();
