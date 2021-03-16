import stringHash from 'string-hash'

export const generateClassNameHash = (
  packageName,
  packageVersion,
  folderName
) =>
  stringHash(`${packageName}@${packageVersion}@${folderName}`)
    .toString(36)
    .substr(0, 5)
