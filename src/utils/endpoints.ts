const BASE_URL = "https://twitterclone-backend.vercel.app"

const LOGIN_ENDPOINT = BASE_URL + '/login'
const REGISTER_ENDPOINT = BASE_URL + '/register'
const LOGOUT_ENDPOINT = BASE_URL + '/logout'
const CHECK_ENDPOINT = BASE_URL + '/check'

const GET_ALL_USERS_ENDPOINT = BASE_URL + '/getAllUsers'
const GET_USER_ENDPOINT = BASE_URL + '/getUser'

const TIMELINE_FEED_ENDPOINT = BASE_URL + '/followers/timeline'

const CRD_TWEETS_ENDPOINT = BASE_URL + '/tweets/'
const UPDATE_TWEET_ENDPOINT = BASE_URL + '/tweets' // + `/${tweetId}`
const GET_TWEETBYID_ENDPOINT = BASE_URL + '/tweets' // + `/${tweetId}`

const FOLLOW_ENDPOINT = BASE_URL + '/followers/follow' // + `/${followedId`
const UNFOLLOW_ENDPOINT = BASE_URL + '/followers/unfollow' // + `/${followedId`
const GET_FOLLOWING_ENDPOINT = BASE_URL + "/followers/following"
const GET_FOLLOWERS_ENDPOINT = BASE_URL + "/followers/followers"




export  {
    LOGIN_ENDPOINT,
    REGISTER_ENDPOINT,
    LOGOUT_ENDPOINT,
    CHECK_ENDPOINT,
    TIMELINE_FEED_ENDPOINT,
    CRD_TWEETS_ENDPOINT,
    UPDATE_TWEET_ENDPOINT,
    GET_TWEETBYID_ENDPOINT,
    FOLLOW_ENDPOINT,
    UNFOLLOW_ENDPOINT,
    // USERS_TWEETS_ENDPOINT,
    GET_USER_ENDPOINT,
    GET_ALL_USERS_ENDPOINT,
    GET_FOLLOWING_ENDPOINT,
    GET_FOLLOWERS_ENDPOINT,
}
