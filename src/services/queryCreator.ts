export const createQuery = (filter: any) => {
    let query = {...filter};
    const excludeFields= ['page', 'sort', 'limit', 'fields'];
    excludeFields.forEach(el => delete query[el]);

    let queryStr = JSON.stringify(query);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
    query = JSON.parse(queryStr);

    return query;
}