export default ({ property = 'all', length = '.3s', ease = 'ease' }) => `
    transition: ${property} ${length} ${ease}
`;