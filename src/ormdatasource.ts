import { DataSource } from 'typeorm';
import orm_config from '@app/ormconfig';

export default new DataSource(orm_config);
