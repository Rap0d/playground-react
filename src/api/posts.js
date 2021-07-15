const sleep = n => new Promise(resolve => setTimeout(resolve, n))

const posts = [
    {
        id: 1,
        title: 'Redux Middleware',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis tincidunt lectus. Nam id sagittis sem, vel pretium magna. Quisque ut risus neque. Duis vitae egestas arcu. Pellentesque sit amet diam vitae felis posuere mollis blandit vitae dolor. Donec a ullamcorper arcu. Aliquam quis felis in lacus elementum aliquam nec ac leo. Phasellus vel accumsan erat, porta malesuada metus. Integer sodales consequat ligula, sed sollicitudin eros tincidunt vel. Aenean eu ornare nisi.'
    },
    {
        id: 2,
        title: 'Redux Thunk',
        body: 'Sed finibus eros libero, sed scelerisque quam malesuada ac. Morbi tristique vehicula justo, nec gravida nulla auctor in. Aliquam nec metus nisl. Vivamus pharetra ultrices mi, et consequat purus facilisis placerat. Vivamus euismod nisl non porttitor aliquet. Aliquam erat volutpat. Morbi commodo accumsan elit sed rutrum. Vestibulum ut erat purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi dolor libero, faucibus sit amet vehicula at, pretium eget est. Nunc pretium mi sed accumsan sagittis. Praesent lobortis nunc quam, quis dictum tortor luctus in. Aenean finibus augue eu vulputate ullamcorper. Duis dapibus in augue non dapibus. Sed eget egestas urna, id tempus ex. Aenean rhoncus neque sed leo iaculis suscipit.'
    },
    {
        id: 3,
        title: 'Redux Sega',
        body: 'Praesent fermentum consectetur eros, a varius magna consequat et. Fusce lobortis scelerisque nisi ut iaculis. Vestibulum ultrices neque libero, et cursus velit consectetur vitae. Fusce sollicitudin tortor vitae est finibus ullamcorper. In hac habitasse platea dictumst. Donec convallis arcu lacus, non lacinia mauris imperdiet eget. Etiam erat quam, condimentum eu risus faucibus, laoreet placerat velit. Quisque nec sapien eu risus aliquam lacinia in sed ipsum. Quisque ac vehicula enim, iaculis scelerisque mi. Ut imperdiet eu justo non placerat. Suspendisse leo dolor, hendrerit ullamcorper est in, venenatis ultricies enim.'
    }
]

export const getPosts = async () => {
    await sleep(500) // 0.5초 쉬고
    return posts // posts 배열
}

// ID로 포스트를 조회하는 비동기 함수
export const getPostById = async id => {
    await sleep(500) // 0.5초 쉬고
    return posts.find(post => post.id === id) // id 로 찾아서 반환
}