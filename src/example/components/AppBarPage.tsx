/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import * as React from 'react';
//import * as ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import AppSnackBar from './AppSnackBar';
import FlatButton from 'material-ui/FlatButton';
import PersonIcon from 'material-ui/svg-icons/social/person';

const styles = {
  bgDiv: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.1,
    width: '100%',
    height: '100%',
    zIndex: -2,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '400px'
  },
  wrapper: {
    overflowY: 'auto'
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row',
    height: '100%'
  },
};

class AssessmentAdapter extends React.Component<{testyTestTitle: (msg:string) => void;}, null> {

  handleSetTitle = (title: string) => {
    const {testyTestTitle} = this.props;
    //alert(title);
    testyTestTitle(title);
  }
  
  render(){
    return (<div>
              {React.cloneElement((this.props as any).children, {setTitle: this.handleSetTitle })}
            </div>);
  }
}



interface MyProps {
  
  appBarTitle?(msg: string): any;
  // categories: any[];
  // pathOnTouchTap(path:string): any;
  // appConfig: any;
  // leftIcon: any;
  // flashMessage: {message: string, open: boolean};
  // appNameShort: string;
  // appNameLong: string;
}

interface MyState {
  title?: any;
  open?: boolean;
  showAltContent: boolean;
  altContent: any;
}





export default class AppBarPage extends React.Component<MyProps, MyState>{
  private altContentTimeoutId = null;
  constructor (props: any) {
    super(props);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.state = {
      open: false,
      title: '',
      showAltContent: false,
      altContent: null
    };
  }

  handleRequestClose () {
    this.setState({
      open: false
    });
  }

  handleTouchTap () {
    this.setState({
      open: true
    });
  }

  handleTitle (title: string) {
    this.setState({
      title: title
    });
  }

  replaceContent = (altContent: any) => {
    if(altContent){
      this.setState({
        showAltContent: true,
        altContent
      });
    }

    this.altContentTimeoutId = setTimeout(() => {
                                  this.restoreContent();
                                }, 20000);
  }

  restoreContent = () => {
      this.altContentTimeoutId && clearTimeout(this.altContentTimeoutId);
      this.setState({
        showAltContent: false,
        altContent: null
      });
  }



  render () {
   // const {categories,pathOnTouchTap,leftIcon,flashMessage} = this.props;

    //const MainContent = !this.state.showAltContent ? React.cloneElement((this.props as any).children, { restoreContent: this.restoreContent, replaceContent: this.replaceContent, appBarTitle: this.handleTitle, categories, pathOnTouchTap, appConfig: appConfig }) : this.state.altContent;
    return (
       
        <div>
            <div style={styles.bgDiv as any} />
            {!this.state.showAltContent && <AppBar
                        title={this.state.title}
                        titleStyle={{textAlign: 'center'}}
                        
                    
                         />}
                <div style={{'padding': '5px'} as any}>
                  <div>
                   
                      {React.cloneElement((this.props as any).children, {setPageTitle: this.handleTitle })}
                
                  </div>
                </div>
                {/* <AppSnackBar {...flashMessage} /> */}
        </div>
    );
  }
}
