import User from '../models/User';

export default async (req, res, next) => {
  try {
    const { provider } = await User.findByPk(req.body.userId);

    if (!provider) {
      return res.status(401).json({
        error: 'Sem permissão de acesso!',
      });
    }

    return next();
  } catch (e) {
    return res.status(401).json({
      error: 'Sem permissão de acesso!',
    });
  }
};
