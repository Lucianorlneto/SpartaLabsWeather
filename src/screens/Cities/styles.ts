import styled from 'styled-components';

const LoadingContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Container = styled.ScrollView.attrs({
  contentContainerStyle: () => ({
    paddingVertical: 8, paddingHorizontal: 16,
  }),
});

export { LoadingContainer, Container };
