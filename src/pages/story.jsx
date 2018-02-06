import React from 'react';

import SubNav from '../components/SubNav';

import { StoryContent } from '../elements/story';
import { PageContainer, PageVisual, PageContent } from '../elements/layout';

export default class Story extends React.Component {
  render() {
    return (
      <PageContainer>
        <SubNav />
        <StoryContent>
          <p className="general our-story">
            In January 2016 a team arrived in Chiang Rai, Thailand to kick off
            the first village of Bible Distribution for the new ministry called
            Share Bibles. They distributed approximately 1,250 bibles in homes,
            schools and Buddhist temples in 10 days. This team initiated the
            first recording system for this project: paper, pens and mobile
            phone pictures. The local address system wasn't organized, google
            maps isn’t well developed for Thailand, and the papers get lost or
            damaged. At the end of the 10 days the leader of the team clearly
            communicated the need: “You need an app to record this data with GPS
            coordinates.” I, Rob Wiebe, the local leader of Share Bibles,
            laughed at the thought of building an app because I have zero
            experience in that field and I don’t know anyone who does. I
            discarded the idea immediately.
          </p>

          <p className="general our-story">
            However, after a few months of continued distribution in our
            location, the need for accurate distribution records increased
            regularly. By May 2016 the Share Bibles ministry team was desperate
            for a tool to make the recording process a success rather than a
            problem. I embarked on the journey of trying to solve our problem
            with God. As I prayed, I sought Christian developers online that
            might be able to help. I found a website of a youth pastor in Texas
            who builds mobile apps on the side. I contacted him and felt that he
            could help us build what we needed. God surprised me with an
            offering for this project,I made the first payment and we began
            (June 2016).
          </p>

          <p className="general our-story">
            The initial app was designed to serve our local needs in Thailand.
            We just wanted to mark every location where we distributed the Bible
            and give it a status (whether a Bible was received or not). However,
            as the idea started to take form, I realized that a really good tool
            could help with much more than just recording. It could actually
            facilitate the long-term follow up for every home. We started
            talking about adding that functionality to our app.
          </p>

          <p className="general our-story">
            News spread that we were building an app to record Bible
            Distribution in Thailand and other nations started to contact me
            about making it available for their nation as well. Soon we were
            planning to build this app for a global scale. Version 1.0 came out
            (only on iOS) at Christmas 2016. It was functional, but very buggy.
            We have used it up until the end of 2017, but having only iOS it is
            very limiting for most users in Thailand and other nations.{' '}
          </p>

          <p className="general our-story">
            As I pressed further and further for the developer to build it
            stronger and better he came to the realization that he was not going
            to be the guy to build the full version of this tool. He decided to
            stop the development and hand it back to me (February 2017). Though
            I was extremely grateful for the service this developer provided and
            the joy it was to work with him, this part of the story was
            heartbreaking and very discouraging.
          </p>

          <p className="general our-story">
            As I continued to pray about this, God encouraged me to believe that
            the Lord Himself would build this app. He gave me specific
            instructions that this app would be built by His people in the form
            of volunteer developers. He told me to pray for people like Oholiab
            and Bezalel (Exodus 31).
          </p>

          <p className="general our-story">
            Shortly after receiving this word from God a key man contacted me
            named Sean Braacx (March 2017). He helped me re-develop the product
            design and functionality from scratch, setting in place the
            potential database systems and designing the first new mockups (May
            2017). While he confessed that he wasn’t the guy who could build
            this app, he said that he would help me find some talent. We talked
            to a number of developers, but our need for this was for top tier
            talent who had experience with iOS, Android and React Native and
            could build much more than a simple prototype, we needed a robust
            application that could scale globally. This is when he connected
            with FaithTech (June 2017). The guys at FaithTech bring this level
            of talent and it will be key to the long term success. Sean met with
            James, the founder of FaithTech, and shared about our app and how he
            could see them partnering with us. He then connected me with James
            and Scott MacLellan, his right hand man at the time, and we had our
            first meeting.
          </p>

          <p className="general our-story">
            It was noticeable that before we even met, they were willing and
            able to help us with our project…and they were happy to build it as
            volunteers. This was the fulfillment of God’s word to me and God
            provided professional developers (FaithTech) from His people to
            build this kingdom expanding tool. FaithTech was the other answer to
            prayer for Oholiab/Bezalel kind of people.
          </p>

          <p className="general our-story">
            Currently Sean Braacx and the FaithTech team are building a new
            version of our app together that we plan to publicly launch in
            September 2018 in iOS and Android. January 2018 we began our first
            controlled test groups in Thailand and Germany.
          </p>
        </StoryContent>
      </PageContainer>
    );
  }
}
