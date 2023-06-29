import { fabric } from 'fabric';
import React, { Component, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { v4 as uuid } from 'uuid';
import { defaults } from './constants';
import Handler, { HandlerOptions } from './handlers/Handler';
import './styles/canvas.less';
import './styles/contextmenu.less';
import './styles/fabricjs.less';
import './styles/tooltip.less';
import { FabricCanvas } from './utils';
import { flatten } from 'lodash';
import AWS from 'aws-sdk';


export interface CanvasInstance {
  handler: Handler;
  canvas: FabricCanvas;
  container: HTMLDivElement;
}

export type CanvasProps = HandlerOptions & {
  responsive?: boolean;
  style?: React.CSSProperties;
};

interface IState {
  id: string;
  loaded: boolean;
}

class InternalCanvas extends Component<CanvasProps, IState> implements CanvasInstance {
  public handler: Handler;
  public canvas: FabricCanvas;
  public container: HTMLDivElement;
  private containerRef = React.createRef<HTMLDivElement>();
  private resizeObserver: ResizeObserver;
  public input:string;

  static defaultProps: CanvasProps = {
    id: uuid(),
    editable: true,
    zoomEnabled: true,
    minZoom: 30,
    maxZoom: 300,
    responsive: true,
    width: 0,
    height: 0,
  };

  state: IState = {
    id: uuid(),
    loaded: false,
  };

  componentDidMount() {
    const { editable, canvasOption, width, height, responsive, ...other } = this.props;
    const { id } = this.state;
    const mergedCanvasOption = Object.assign({}, defaults.canvasOption, canvasOption, {
      width,
      height,
      selection: (typeof canvasOption?.selection !== 'undefined' && canvasOption?.selection) || editable,
    });
    this.canvas = new fabric.Canvas(`canvas_${id}`, mergedCanvasOption);
    this.canvas.setBackgroundColor(mergedCanvasOption.backgroundColor, this.canvas.renderAll.bind(this.canvas));
    this.canvas.renderAll();
    this.container = this.containerRef.current;
    this.handler = new Handler({
      id,
      width,
      height,
      editable,
      canvas: this.canvas,
      container: this.containerRef.current,
      canvasOption: mergedCanvasOption,
      ...other,
    });
    if (this.props.responsive) {
      this.createObserver();
    } else {
      this.handleLoad();
    }
  }

 

  componentWillUnmount() {
    this.destroyObserver();
    this.handler.destroy();
  }


	createObserver = () => {
		this.resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
			const { width = 0, height = 0 } = (entries[0] && entries[0].contentRect) || {};
			this.handler.eventHandler.resize(width, height);
			if (!this.state.loaded) {
				this.handleLoad();
			}
		});
		this.resizeObserver.observe(this.containerRef.current);
	};

	destroyObserver = () => {
		if (this.resizeObserver) {
			this.resizeObserver.disconnect();
			this.resizeObserver = null;
		}
	};

	handleLoad = () => {
		this.setState(
		  {
			loaded: true,
		  },
		  () => {
			if (this.props.onLoad) {
			  this.props.onLoad(this.handler, this.canvas);
			}
		  },
		);
	  };

// ...

handleImageUpload = (event: { target: { files: any[]; }; }) => {
  const file = event.target.files[0];
  
  AWS.config.update({
    accessKeyId: 'AKIAUCNIQ4ORPVZRNGNV',
    secretAccessKey: '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',
    region: 'us-east1',
  });

  const s3 = new AWS.S3();
  const params = {
    Bucket: 'radiance-sravan7',
    Key: file.name,
    Body: file,
    ACL: 'public-read',
  };

  s3.upload(params, (err: any, data: { Location: any; }) => {
    if (err) {
      console.error('Error uploading image to S3:', err);
      return;
    }

    const imageUrl = data.Location;

    this.postImageUrlToApi(imageUrl);
  });
};
postImageUrlToApi = async (imageUrl: string) => {
  const { canvas } = this.handler;

  const headers = new Headers();

  headers.append('image-url', imageUrl);

  const response = await fetch('http://localhost:3001/img2img', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({}),
  });

  if (response.ok) {
    const blob = await response.blob();
    fabric.Image.fromURL(URL.createObjectURL(blob), (img) => {
      img.set({
        left: 0,
        top: 0,
      });
      canvas.add(img);
      canvas.setActiveObject(img);
      canvas.renderAll();
    });
  } else {
    console.error('Failed to post image URL to the API.');
  }
};


    fetching = async (e: any) => {
      e.preventDefault();
      const { canvas } = this.handler;
      const inputValue = this.input;
    
      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      headers.append("enable_hr", "false");
      headers.append("denoising_strength", "0");
      headers.append("firstphase_width", "0");
      headers.append("firstphase_height", "0");
      headers.append("hr_scale", "2");
      headers.append("hr_upscaler", "string");
      headers.append("hr_second_pass_steps", "0");
      headers.append("hr_resize_x", "0");
      headers.append("hr_resize_y", "0");
      headers.append("hr_sampler_name", "string");
      headers.append("hr_prompt", "");
      headers.append("hr_negative_prompt", "");
      headers.append("prompt", inputValue); 
      headers.append("styles", "string");
      headers.append("seed", "-1");
      headers.append("subseed", "-1");
      headers.append("subseed_strength", "0");
      headers.append("seed_resize_from_h", "-1");
      headers.append("seed_resize_from_w", "-1");
      headers.append("sampler_name", "");
      headers.append("batch_size", "1");
      headers.append("n_iter", "1");
      headers.append("steps", "50");
      headers.append("cfg_scale", "7");
      headers.append("width", "512");
      headers.append("height", "512");
      headers.append("restore_faces", "false");
      headers.append("tiling", "false");
      headers.append("do_not_save_samples", "false");
      headers.append("do_not_save_grid", "false");
      headers.append("negative_prompt", "string");
      headers.append("eta", "0");
      headers.append("s_min_uncond", "0");
      headers.append("s_churn", "0");
      headers.append("s_tmax", "0");
      headers.append("s_tmin", "0");
      headers.append("s_noise", "1");
      headers.append("override_settings", "{}");
      headers.append("override_settings_restore_afterwards", "true");
      headers.append("script_args", "[]");
      headers.append("sampler_index", "Euler");
      headers.append("script_name", "");
      headers.append("send_images", "true");
      headers.append("save_images", "false");
      headers.append("alwayson_scripts", "{}");
      console.log(inputValue)
    
      const response = await fetch("http://localhost:3001/text2img", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({}),
      });
    
      if (response.ok) {
        const blob = await response.blob();
        fabric.Image.fromURL(URL.createObjectURL(blob), (img) => {
          img.set({
            left: 0,
            top: 0,
          });
          canvas.add(img);
          canvas.setActiveObject(img);
          canvas.renderAll();
        });
      } else {
        console.error("Failed to fetch image from the API.");
      }
    
      this.input = "";
    };
	  
	
	  render() {
		const { style } = this.props;
		const { id } = this.state;
		
		return (
		  <div
			ref={this.containerRef}
			id={id}
			className="rde-canvas"
			style={{ width: '100%', height: '100%', ...style }}
		  >
			<div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'5px'}}>
			<input type="text"  value={this.input} onChange={(e) =>{
				this.input = e.target.value
        
			}} placeholder="input"/>

			<button onClick={this.fetching}>Add Image</button>
			</div>
			<canvas id={`canvas_${id}`} />
		  </div>
		);
	  }
	}
	
	const Canvas: React.FC<CanvasProps> = React.forwardRef<CanvasInstance, CanvasProps>((props, ref) => {
	  const canvasRef = useRef<InternalCanvas>();
	  React.useImperativeHandle(ref, () => ({
		handler: canvasRef.current.handler,
		canvas: canvasRef.current.canvas,
		container: canvasRef.current.container,
	  }));
	  return <InternalCanvas ref={canvasRef} {...props} />;
	});
	
	export default Canvas;