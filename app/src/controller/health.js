import { client } from '../database';

export const liveness = async (req, res) => {
    const query = 'select key from system.local';
    try {
        const result = await client.execute(query);
        return res.status(200).json({
            msg: 'Base de datos Conectada',
            data: result
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Ocurrio un error al conectar la db',
            error
        });
    }
};
