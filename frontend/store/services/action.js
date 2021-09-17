import {CREATE_COMMENT, DELETE_COMMENT, GET_SERVICES, UPDATE_COMMENT} from "../constants";

export const createCommentAsync = (commentModel, postId, requestKey) => ({
    type: CREATE_COMMENT,
    request: {
        url: `/posts/${postId}/comments`,
        data: {content: commentModel.content},
        method: 'POST',
    },
    meta: {
        requestKey: requestKey,
        mutations: {
            [GET_COMMENTS_LIST + postId]: {
                updateDataOptimistic: (data) => ({
                    data: [...data.data, commentModel],
                }),
                updateData: (data, mutationData) => ({
                    data: [...data.data.filter(oldComment => oldComment.id !== commentModel.id), mutationData.data],
                }),
                revertData: data => ({
                    data: data.data.filter(oldComment => oldComment.id !== commentModel.id),
                })
            },
        },
        requestsCapacity: 5,
    },
})

export const deleteCommentAsync = (comment, mutationKey) => ({
    type: DELETE_COMMENT,
    request: {
        url: `/comments/${comment.id}`,
        method: 'DELETE',
    },
    meta: {
        requestKey: comment.id,
        mutations: {
            [GET_COMMENTS_LIST + mutationKey]: {
                updateDataOptimistic: (data) => ({
                    data: data.data.filter(oldComment => oldComment.id !== comment.id),
                }),
                revertData: data => ({
                    data: [...data.data, comment],
                })
            },
        },
    },
})

export const updateCommentAsync = (commentId, updatedComment, mutationKey,) => ({
    type: UPDATE_COMMENT,
    request: {
        url: `/comments/${commentId}`,
        data: updatedComment,
        method: 'PUT',
    },
    meta: {
        requestKey: commentId,
        mutations: {
            [GET_COMMENTS_LIST + mutationKey]: {
                updateDataOptimistic: (data) => ({
                    data: data.data.map(comment =>
                        comment.id === updatedComment.id ? updatedComment : comment)
                }),
                updateData: (data, mutationData) => ({
                    data: [...data.data.filter(oldComment => oldComment.id !== updatedComment.id), mutationData.data],
                }),
                revertData: (data) => ({
                    data: data.data.map(comment => {
                        return comment.id === updatedComment.id ? {
                            ...updatedComment,
                            content: updatedComment.oldContent
                        } : comment
                    }),
                })

            },
        },
    },
})


export const getCategoryServices = (categoryId) =>
    {
        console.log('asDF')
        return{
    type: GET_SERVICES,
    request: {url: `/service-categories/${categoryId}/services`},
    meta: {
        requestKey: categoryId
    }}
}




