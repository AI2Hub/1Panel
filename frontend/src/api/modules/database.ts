import http from '@/api';
import { ReqPage, ResPage } from '../interface';
import { Database } from '../interface/database';

export const searchMysqlDBs = (params: ReqPage) => {
    return http.post<ResPage<Database.MysqlDBInfo>>(`/databases/search`, params);
};

export const backup = (params: Database.Backup) => {
    return http.post(`/databases/backup`, params);
};
export const recover = (params: Database.Recover) => {
    return http.post(`/databases/recover`, params);
};
export const recoverByUpload = (params: Database.RecoverByUpload) => {
    return http.post(`/databases/recover/byupload`, params);
};

export const addMysqlDB = (params: Database.MysqlDBCreate) => {
    return http.post(`/databases`, params);
};
export const updateMysqlAccess = (params: Database.ChangeInfo) => {
    return http.post(`/databases/change/access`, params);
};
export const updateMysqlPassword = (params: Database.ChangeInfo) => {
    return http.post(`/databases/change/[password]`, params);
};
export const updateMysqlVariables = (params: Array<Database.VariablesUpdate>) => {
    return http.post(`/databases/variables/update`, params);
};
export const updateMysqlConfByFile = (params: Database.MysqlConfUpdateByFile) => {
    return http.post(`/databases/conf/update/byfile`, params);
};
export const deleteCheckMysqlDB = (id: number) => {
    return http.post<Array<string>>(`/databases/del/check/${id}`);
};
export const deleteMysqlDB = (id: number) => {
    return http.post(`/databases/del/${id}`);
};

export const loadMysqlBaseInfo = () => {
    return http.get<Database.BaseInfo>(`/databases/baseinfo`);
};
export const loadMysqlVariables = () => {
    return http.get<Database.MysqlVariables>(`/databases/variables`);
};
export const loadMysqlStatus = () => {
    return http.get<Database.MysqlStatus>(`/databases/status`);
};
export const loadRemoteAccess = () => {
    return http.get<boolean>(`/databases/remote`);
};
export const loadDBNames = () => {
    return http.get<Array<string>>(`/databases/options`);
};

// redis
export const loadRedisStatus = () => {
    return http.get<Database.RedisStatus>(`/databases/redis/status`);
};
export const loadRedisConf = () => {
    return http.get<Database.RedisConf>(`/databases/redis/conf`);
};
export const RedisPersistenceConf = () => {
    return http.get<Database.RedisPersistenceConf>(`/databases/redis/persistence/conf`);
};
export const updateRedisPersistenceConf = (params: Database.RedisConfPersistenceUpdate) => {
    return http.post(`/databases/redis/conf/update/persistence`, params);
};
export const updateRedisConf = (params: Database.RedisConfUpdate) => {
    return http.post(`/databases/redis/conf/update`, params);
};
export const updateRedisConfByFile = (params: Database.RedisConfUpdateByFile) => {
    return http.post(`/databases/redis/conf/update/byfile`, params);
};
export const backupRedis = () => {
    return http.post(`/databases/redis/backup`);
};
export const recoverRedis = (param: Database.RedisRecover) => {
    return http.post(`/databases/redis/recover`, param);
};
export const redisBackupRedisRecords = (param: ReqPage) => {
    return http.post<ResPage<Database.FileRecord>>(`/databases/redis/backup/records`, param);
};
