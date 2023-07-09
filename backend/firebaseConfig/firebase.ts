import key from './firestoreKey.json'
const admin = require('firebase-admin');

require('firebase-admin/firestore');

admin.initializeApp(
    {
        projectId: "victor-resume-63b88",
        clientEmail: "firebase-adminsdk-xhjh8@victor-resume-63b88.iam.gserviceaccount.com",
        privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCXPAJCDqQRDi/v\nxBI/IWUaee4NMZ0iQgbYNHjKC56f9W9g3CCAMFY/hYE7kNyFUST9Ka+yF6a+DsrQ\n0JxSBBH80TryVVAHUmyZHAhOuFLfBLEKd3jCZ5qAIOHYixEmFF9DsCebYgzd2l43\nw+tIs4Sx+CaPSvY4MG5y4DHG90DPARJLVwrw+w1Ei6Ds6+Py6dBxZAivkAJ5QFQ/\nVEfy5vfqWLOe7wThFpB3t2nITexPFfrXkjuoAdL9bN6txglv1R+++QqvuGHcXijG\nXoaSTIBx0x7LtdYOjfh2/ZOF9YuSdPq+lS6g0HUVU6yPrd5fHsJtwFXGX10mf8HB\n0LOo0+spAgMBAAECggEADPbG0yz+t6Jczc1XERSGq0fZ3His/+njPOpc+YwYcdBv\n8HO+N3utRDtO0jFyeqnzi6rkoqJ8/fYC2pAsLkQNQXvmdS25//6uGRitktRUvXhh\nL5Ga1CaROG8l9p8pMURcZc8cytv5vvszY2b6IGllgRbRqCvkjyy1P+F9ct3w4mDf\n5jYQ7xI/PWXDE4DthDyCCKIHgqpVYI8AglXasKcbOhBQwQ4QXbYa9OOsRGK+lS9g\nK/Wap+Lc4kLKIHFlKpoa935pW1jqCqgE4no1DcLiD5aDZGMmojn3I8QJv8jbINXB\nVvPhwoCf5QhCDukiA71oF2WmzeA5DdkhirtTNgSMzwKBgQDGiRFfxz2tiAkPFoAG\nnW298HpEOP7p4CmV5/ZcPTzD8PjI8Q0zA/FWqnVpR+EYiQHoDJctFCRF6Azu9GoR\nqZKcICrjizpZKl+RTfqwdOA6paxQ1anpraH2igyUsq0lSVnH8pih+J2H+sHWQroI\nV/lij/3fbnVib6xOOWGU2GAdQwKBgQDDAhCzvxiqaFu96cKvgdcNKTtPfkeQiiAD\nfpk8e/h308F/HtGOLWXLHtHcC0kuKrkiUjKU5Wjek80zkdh/VQcSQAva5iRfppOo\nkVpUUGrIEy9lJzs8fmxOuuT1xjx8wYD9pAIYNi/a4NhyNeUpa3SLQtaGrbNDhBOu\nRJ7OVWQ5IwKBgQCNkwTOtfennVBIcBUPooe1YJzvtW0iPfWprmYh1JFWcKoYMLzm\n2jLpSFi9oMJFir3PSdssDCbpqtY+OBDDU5b2uoGbDZeoKe1IYsEXv+B+MdI1OogV\n2PmcI0lhaCDMbAgX60koh29enlRHhAHBHWr6/A9fmxceAOBwT77kM4AmnQKBgFNQ\nrpIdMwybSZb6KJOTha25z/1GlozKdqMHk7CjxqRrdGA7aoy0GKmPoVnB+KIg3rgr\nJjE3UnbF7wX5aeX9DeheNLJxYVj8clmywEUFlpmkmLs+57AQ03VPpELdTzp98f5r\n8/kkLY32QoOJQz9PCZv2EnG4BL7zzvTFnJPLJ+bBAoGBAMW02eEZI/SbCchK1LmD\nlHV3NcJDwE2BCToACqW84zENHgcbS0CGIiqzlRbfCN0IRi/myw3DR+SAuFh9qLmv\ntZs/x+7Pz8ASZ8GUBnbQ3mdLge7VnKoHJ6Jqv27p2JbBhOWbSD7c5Z3nQhqw7IaP\nnaWWEp8FAjxISCKCt+dqYVCw\n-----END PRIVATE KEY-----\n"
    },
    //databaseURL: "<DATABASE_URL>"
);

export const db = admin.firestore();

//module.exports = db;
