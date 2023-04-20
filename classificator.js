const bayes = require('classificator')
const classifier = bayes()

const movieSentences = [
    'The movie was amazing!',
    'I had a great time watching the film!',
    'It was an awesome movie!',
    'The acting in the film was superb!',
    'The cinematography was breathtaking!',
    'The story was engaging and kept me hooked!',
    'The special effects were top-notch!',
    'I was blown away by the visual effects!',
    'The soundtrack was fantastic and added to the overall experience!',
    'The performances by the cast were outstanding!',
    'I thoroughly enjoyed every minute of the movie!',
    'It was a captivating and thrilling cinematic experience!',
    'The movie had a compelling and thought-provoking storyline!',
    'The direction and screenplay were brilliant!',
    'The film was visually stunning and had great production value!',
    'I was impressed by the creativity and originality of the movie!',
    'The humor in the film was clever and well-executed!',
    'The movie was emotionally resonant and touched my heart!',
    'I was on the edge of my seat throughout the entire film!',
];

const spamSentences = [
    'Buy my free viagra pill and get rich!',
    'Get rich quick with our amazing investment scheme!',
    'Congratulations! You have won a free vacation!',
    'Claim your prize by clicking on this link!',
    'You have been selected for a limited-time offer!',
    'Double your money in just 24 hours!',
    'Guaranteed to make you money from home!',
    'Make thousands of dollars with our proven system!',
    'Invest now and become a millionaire!',
    'Get cash now with our payday loan service!',
    'Earn passive income with our revolutionary program!',
    'Make money fast and easy with our online business!',
    'Unlock the secrets to financial success with our program!',
    'Become a millionaire overnight with our exclusive method!',
    'Dont miss out on this once-in-a-lifetime opportunity!',
    'Invest in our lucrative business and reap the rewards!',
    'Get out of debt now with our debt consolidation service!',
    'Join our affiliate program and start earning money today!',
    'Experience financial freedom with our proven system!',
    'Take control of your finances and achieve wealth with our guidance!'
];

const negativeSentences = [
    'I really hate dust and annoying cats',
    'Worst experience ever! Avoid at all costs!',
    'Terrible service with rude staff',
    'Disgusting food and dirty environment',
    'Complete waste of time and money',
    'Horrible customer service and unhelpful staff',
    'Extremely disappointed with the quality',
    'Unbearable noise and uncomfortable seats',
    'I regret choosing this place, it was a disaster',
    'Overpriced and subpar quality',
    'Disappointing experience from start to finish',
    'I would not recommend this to anyone',
    'Awful experience with nothing positive to say',
    'Unhygienic conditions and rude staff',
    'I feel cheated and ripped off',
    'Avoid this place like the plague',
    'I ve had better experiences elsewhere',
    'Not worth the money, time, or effort',
    'I am thoroughly dissatisfied with my experience',
    'This was a total disappointment and waste of money'
];

const trollSentences = [
    'LOL this sucks so hard',
    'Worst thing I have ever seen. Total garbage!',
    'What a joke! Waste of time and effort',
    'Terrible. Whoever made this must be clueless',
    'This is hilariously bad. Cant stop laughing',
    'Complete disaster. Can t believe I wasted my time',
    'Pathetic attempt. Not even worth mocking',
    'Ridiculously awful. How did this even get made?',
    'I ve seen better things in my sleep. Lame!',
    'I can t even describe how terrible this is',
    'Embarrassing. I can t believe I watched this',
    'I ve seen better acting in a kindergarten play',
    'This is so bad it s not even funny',
    'Whoever made this must have zero talent',
    'I ve seen better special effects in a high school project',
    'Absolutely atrocious. Can t believe I sat through this',
    'This is a joke, right? Must be a prank',
    'I would give this negative stars if I could',
    'I wouldn t wish this on my worst enemy. Utter garbage',
    'Just terrible. I can t believe I wasted my time on this'
];

const trollSentiment    = 'troll'; // Specify the sentiment for all sentences
const negativeSentiment = 'negative'; // Specify the sentiment for all sentences
const spamSentiment     = 'spam'; // Specify the sentiment for all sentences
const movieSentiment    = 'positive'; // Specify the sentiment for all sentences

const spamReviews = spamSentences.map(sentence => {
    return {
        sentence: sentence,
        sentiment: spamSentiment
    };
});

const movieReviews = movieSentences.map(sentence => {
    return {
        sentence: sentence,
        sentiment: movieSentiment
    };
});

const negativeReviews = negativeSentences.map(sentence => {
    return {
        sentence: sentence,
        sentiment: negativeSentiment
    };
});

const trollComments = trollSentences.map(sentence => {
    return {
        sentence: sentence,
        sentiment: trollSentiment
    };
});

movieReviews.forEach(arr => {
    classifier.learn(arr.sentence, arr.sentiment);
})

spamReviews.forEach(arr => {
    classifier.learn(arr.sentence, arr.sentiment);
})

negativeReviews.forEach(arr => {
    classifier.learn(arr.sentence, arr.sentiment);
})

trollComments.forEach(arr => {
    classifier.learn(arr.sentence, arr.sentiment);
})

const testSentences = [
    { sentence: 'I absolutely loved this movie! Amazing story and great acting.', sentiment: 'positive' },
    { sentence: 'What an awesome movie! Had a good time watching it.', sentiment: 'positive' },
    { sentence: 'I can\'t stop thinking about how much I enjoyed this film. So good!', sentiment: 'positive' },
    { sentence: 'This is a classic. I will definitely watch it again. Such a great movie!', sentiment: 'positive' },
    { sentence: 'I highly recommend this movie. It\'s fantastic and worth every penny.', sentiment: 'positive' },
    { sentence: 'This movie was terrible. Waste of time and money. I regret watching it.', sentiment: 'negative' },
    { sentence: 'I was so disappointed with this film. It didn\'t live up to the hype.', sentiment: 'negative' },
    { sentence: 'What a disaster. I can\'t believe I wasted my time on this movie.', sentiment: 'negative' },
    { sentence: 'This movie was so bad it was laughable. Avoid at all costs.', sentiment: 'negative' },
    { sentence: 'I couldn\'t stand this film. The acting was terrible and the story was a mess.', sentiment: 'negative' },
    { sentence: 'This is an obvious spam message. Ignore and delete.', sentiment: 'spam' },
    { sentence: 'Get rich quick with our amazing offer. Don\'t miss out!', sentiment: 'spam' },
    { sentence: 'Free viagra pill! Limited time offer. Buy now and save!', sentiment: 'spam' },
    { sentence: 'Congratulations! You\'ve won a luxury vacation. Claim your prize now!', sentiment: 'spam' },
    { sentence: 'Don\'t miss this opportunity. Earn money fast and easy!', sentiment: 'spam' },
    { sentence: 'This comment is clearly intended to troll and provoke. Ignore and move on.', sentiment: 'troll' },
    { sentence: 'Pathetic attempt at trolling. Not worth responding to.', sentiment: 'troll' },
    { sentence: 'Ignore this comment. Clearly an attempt to stir up trouble.', sentiment: 'troll' },
    { sentence: 'Just another troll trying to get attention. Don\'t engage.', sentiment: 'troll' },
    { sentence: 'This comment is so ridiculous it\'s not even worth a response.', sentiment: 'troll' }
];

let correctPredictions = 0;
testSentences.forEach(arr => {
    const result = classifier.categorize(arr.sentence);
    if (result.predictedCategory === arr.sentiment) {
        correctPredictions++;
    }
});

export const test = (correctPredictions / testSentences.length) * 100;