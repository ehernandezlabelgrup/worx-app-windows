import styled from 'styled-components'



const getSize = (length)=> {
  const rounded = Math.ceil(length / 4)
  if(rounded > 1){
    return 2
  }
  return rounded
}

export const Container = styled.div`
position: relative;
display: inline-block;
    vertical-align: top;
    width: ${props => `calc((100% / ${props.col || 3}))`};
    border-bottom: ${props => !props.noBorder && '1px solid #efefef'} ;
        border-left: ${props => !props.noBorder && '1px solid #efefef'} ;

      height: ${props => `calc(100vh / ${getSize(props.length)})`};

    cursor: pointer;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    overflow: hidden;
}

`