import { NextPage } from 'next';
import { HeroAvatar } from 'components/animation';
import { Layout } from 'components/layout';
import { Box } from 'grommet';
import { Connect, Story } from 'components/sections';

const About: NextPage = () => {
  return (
    <Layout style={{ overflow: 'visible' }}>
      <Box pad={{ horizontal: 'large' }} style={{ position: 'relative', overflow: 'visible' }}>
        <Story pad={{ top: 'small' }} />
        <Box style={{ position: 'absolute', right: 0, top: 10 }}>
          <HeroAvatar />
        </Box>
      </Box>

      <Connect pad={{ vertical: 'xlarge' }} />
    </Layout>
  );
};

export default About;
