var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { defineComponent, ref, createVNode, Transition, withDirectives, vShow, unref, render, mergeProps, getCurrentInstance, watch, isVNode, Fragment, withModifiers, nextTick, createTextVNode, computed, onMounted, onBeforeUnmount, inject, provide, isProxy, toRaw, Comment, getCurrentScope, onScopeDispose, shallowReactive, cloneVNode, shallowRef, h } from "vue";
import { isString, isArray, isObject, isFunction, isNil, reverse, head, last, dropRight, isBoolean, isEqual, isNaN, omitBy, fromPairs, map, get, cloneWith, cloneDeep, isSymbol, compact, isNumber, isUndefined, omit, pick, set, update, unset, clone, transform, debounce, reduce, toString, has, take, takeRight } from "lodash-es";
import { Menu, Button, Dropdown, Breadcrumb as Breadcrumb$1, Avatar as Avatar$1, Space, DatePicker, RangePicker, TimePicker, TimeRangePicker, Badge, Select as Select$1, TreeSelect as TreeSelect$1, Cascader as Cascader$1, Radio as Radio$1, Checkbox as Checkbox$1, Switch as Switch$1, Slider as Slider$1, InputNumber, Input, Descriptions as Descriptions$1, ConfigProvider, Spin, Form as Form$1, Table as Table$1, Row, Col, Modal, Drawer, Card, Tooltip as Tooltip$1, Tree, Popover, TypographyText } from "ant-design-vue";
import Icon, { createFromIconfontCN, CloseOutlined, LeftOutlined, RightOutlined, CloseCircleOutlined, UserOutlined, CaretDownOutlined, SettingOutlined, LoginOutlined, EyeOutlined, EyeInvisibleOutlined, DownOutlined, UpOutlined, ColumnHeightOutlined, VerticalAlignTopOutlined, VerticalAlignMiddleOutlined, VerticalAlignBottomOutlined, ReloadOutlined } from "@ant-design/icons-vue";
import dayjs from "dayjs";
function classNames(...args) {
  const classes = [];
  for (let i = 0; i < args.length; i++) {
    const value = args[i];
    if (!value)
      continue;
    if (isString(value)) {
      classes.push(this && this[value] || value);
    } else if (isArray(value)) {
      const inner = classNames.apply(this, value);
      inner && classes.push(inner);
    } else if (isObject(value)) {
      Object.keys(value).forEach((key) => {
        value[key] && classes.push(this && this[key] || key);
      });
    }
  }
  return classes.join(" ");
}
const loading = "_loading_1sery_1";
const circular = "_circular_1sery_21";
const path = "_path_1sery_26";
const styles$j = {
  loading,
  "loading-container": "_loading-container_1sery_11",
  circular,
  "loading-rotate": "_loading-rotate_1sery_1",
  path,
  "loading-dash": "_loading-dash_1sery_1"
};
const cx$l = classNames.bind(styles$j);
const LoadingCom = /* @__PURE__ */ defineComponent({
  props: {
    onClose: {
      type: Function,
      default: void 0
    }
  },
  setup(props, {
    expose
  }) {
    const spinning = ref(true);
    function doClose() {
      props.onClose && props.onClose();
    }
    function hide() {
      spinning.value = false;
    }
    expose({
      spinning,
      hide
    });
    return () => {
      return createVNode(Transition, {
        "name": "fade",
        "appear": true,
        "onAfterLeave": doClose
      }, {
        default: () => [withDirectives(createVNode("div", {
          "class": cx$l("loading")
        }, [createVNode("div", {
          "class": cx$l("loading-container")
        }, [createVNode("svg", {
          "viewBox": "25 25 50 50",
          "class": cx$l("circular")
        }, [createVNode("circle", {
          "cx": "50",
          "cy": "50",
          "r": "20",
          "fill": "none",
          "class": cx$l("path")
        }, null)])])]), [[vShow, unref(spinning)]])]
      });
    };
  }
});
let container = null;
let vNode = null;
function removeChild(node) {
  try {
    node && document.body.removeChild(node);
  } catch (err) {
    console.warn(err);
  }
}
function destroy() {
  container && render(null, container);
  container && removeChild(container);
  vNode = null;
  container = null;
}
function Loading() {
  container && destroy();
  container = document.createElement("div");
  vNode = createVNode(LoadingCom, { onClose: destroy });
  render(vNode, container);
  document.body.appendChild(container);
  return () => {
    if (vNode && vNode.component) {
      const instance = vNode.component || {};
      const { exposeProxy } = instance;
      exposeProxy && exposeProxy.hide();
    }
  };
}
Loading.destroy = destroy;
const scriptUrl = "";
const IconFont = createFromIconfontCN({
  scriptUrl
});
const ExitFullscreenOutlined = /* @__PURE__ */ defineComponent({
  setup(props, {
    attrs
  }) {
    return () => {
      const iconSlots = {
        component: (svgProps) => {
          return createVNode("svg", mergeProps({
            "viewBox": "0 0 1024 1024",
            "width": "1em",
            "height": "1em"
          }, svgProps), [createVNode("path", {
            "d": "M921.6003125 648.53375a45.5109375 45.5109375 0 0 1 5.325 90.703125l-5.325 0.31875H739.555625v182.04375a45.5109375 45.5109375 0 0 1-40.1859375 45.193125l-5.325 0.31875a45.5109375 45.5109375 0 0 1-45.193125-40.186875l-0.31875-5.325V694.045625a45.5109375 45.5109375 0 0 1 40.186875-45.193125l5.325-0.31875h227.555625z m-591.645 0l5.325 0.31875a45.5109375 45.5109375 0 0 1 39.868125 39.8671875l0.31875 5.325v227.555625l-0.31875 5.325a45.5109375 45.5109375 0 0 1-39.868125 39.8671875l-5.325 0.31875-5.325-0.31875a45.5109375 45.5109375 0 0 1-39.8671875-39.868125l-0.31875-5.325v-182.04375H102.400625l-5.325-0.31875a45.5109375 45.5109375 0 0 1 0-90.384375l5.325-0.31875h227.5546875zM694.0446875 56.88875l5.325 0.31875a45.5109375 45.5109375 0 0 1 39.8671875 39.868125l0.31875 5.325v182.04375h182.04375l5.325 0.31875a45.5109375 45.5109375 0 0 1 0 90.384375l-5.325 0.31875H694.045625l-5.325-0.31875a45.5109375 45.5109375 0 0 1-39.868125-39.8671875l-0.31875-5.325V102.3996875l0.31875-5.325a45.5109375 45.5109375 0 0 1 39.868125-39.8671875l5.325-0.31875z m-364.089375 0a45.5109375 45.5109375 0 0 1 45.193125 40.186875l0.31875 5.325v227.5546875a45.5109375 45.5109375 0 0 1-40.186875 45.193125l-5.325 0.31875H102.3996875a45.5109375 45.5109375 0 0 1-5.325-90.7040625l5.325-0.31875h182.0446875V102.400625a45.5109375 45.5109375 0 0 1 40.1859375-45.193125l5.325-0.31875z",
            "p-id": "5011"
          }, null)]);
        }
      };
      return createVNode(Icon, attrs, iconSlots);
    };
  }
});
const FullscreenOutlined = /* @__PURE__ */ defineComponent({
  setup(props, {
    attrs
  }) {
    return () => {
      const iconSlots = {
        component: (svgProps) => {
          return createVNode("svg", mergeProps({
            "viewBox": "0 0 1024 1024",
            "width": "1em",
            "height": "1em"
          }, svgProps), [createVNode("path", {
            "d": "M851.815625 75.093125H681.90875a24.271875 24.271875 0 0 0-24.271875 24.2728125v48.545625a24.271875 24.271875 0 0 0 24.271875 24.271875h169.90875v169.90875a24.271875 24.271875 0 0 0 24.271875 24.271875h48.545625a24.271875 24.271875 0 0 0 24.271875-24.271875V172.1834375A97.0903125 97.0903125 0 0 0 851.8175 75.093125zM75.0940625 172.184375v169.90875a24.271875 24.271875 0 0 0 24.2728125 24.271875h48.545625a24.271875 24.271875 0 0 0 24.271875-24.271875V172.1834375h169.90875a24.271875 24.271875 0 0 0 24.271875-24.271875V99.3659375a24.271875 24.271875 0 0 0-24.271875-24.271875H172.1834375A97.0903125 97.0903125 0 0 0 75.093125 172.1825z m776.7234375 509.724375v169.90875H681.9078125a24.271875 24.271875 0 0 0-24.271875 24.271875v48.545625a24.271875 24.271875 0 0 0 24.271875 24.271875h169.90875a97.0903125 97.0903125 0 0 0 97.0903125-97.089375V681.9078125a24.271875 24.271875 0 0 0-24.2728125-24.271875h-48.545625a24.271875 24.271875 0 0 0-24.271875 24.271875z m-703.905-24.271875H99.3659375a24.271875 24.271875 0 0 0-24.271875 24.271875v169.90875a97.0903125 97.0903125 0 0 0 97.089375 97.0903125h169.90875a24.271875 24.271875 0 0 0 24.271875-24.2728125v-48.545625a24.271875 24.271875 0 0 0-24.271875-24.271875H172.1834375V681.9078125a24.271875 24.271875 0 0 0-24.271875-24.271875z",
            "p-id": "4870"
          }, null)]);
        }
      };
      return createVNode(Icon, attrs, iconSlots);
    };
  }
});
const HamburgerOutlined = /* @__PURE__ */ defineComponent({
  setup(props, {
    attrs
  }) {
    return () => {
      const iconSlots = {
        component: (svgProps) => {
          return createVNode("svg", mergeProps({
            "viewBox": "0 0 1024 1024",
            "width": "1em",
            "height": "1em"
          }, svgProps), [createVNode("path", {
            "d": "M78.85973333 286.01386667c0-20.80106667 16.91626667-37.664 37.78026667-37.664h790.72c20.86506667 0 37.78026667 16.71786667 37.78026667 37.664 0 20.80106667-16.91626667 37.664-37.78026667 37.664h-790.72c-20.86506667 0-37.78026667-16.71786667-37.78026667-37.664z m0 225.98613333c0-20.80106667 16.91626667-37.664 37.78026667-37.664h790.72c20.86506667 0 37.78026667 16.71786667 37.78026667 37.664 0 20.80106667-16.91626667 37.664-37.78026667 37.664h-790.72c-20.86506667 0-37.78026667-16.71786667-37.78026667-37.664z m0 225.98613333c0-20.80106667 16.91626667-37.664 37.78026667-37.664h790.72c20.86506667 0 37.78026667 16.71786667 37.78026667 37.664 0 20.80106667-16.91626667 37.664-37.78026667 37.664h-790.72c-20.86506667 0-37.78026667-16.71786667-37.78026667-37.664z",
            "p-id": "2547"
          }, null)]);
        }
      };
      return createVNode(Icon, attrs, iconSlots);
    };
  }
});
const MenuOutlined = /* @__PURE__ */ defineComponent({
  setup(props, {
    attrs
  }) {
    return () => {
      const iconSlots = {
        component: (svgProps) => {
          return createVNode("svg", mergeProps({
            "viewBox": "0 0 1024 1024",
            "width": "1em",
            "height": "1em"
          }, svgProps), [createVNode("path", {
            "d": "M488.40963527 686.29846243c-22.26015687 0-44.11397575-5.77373867-64.95718514-17.1605447-32.43842446-17.72173539-371.05501184-215.55525746-385.45384903-223.96845398l-1.52871936-0.94657194c-5.22768498-3.42652018-31.39638045-22.13674211-33.23130993-54.005826-0.83480007-14.50362311 3.26934073-36.04890397 27.56585016-56.32044487l2.87697352-2.39961201 458.07558769-239.43960576c7.37697337-4.59430798 29.36119296-16.56442539 58.17050909-16.56442539 20.53583645 0 40.04825657 5.87153977 57.99702983 17.45161899 43.17089678 27.85110243 377.48192029 236.02123549 380.85255509 238.12162446l0.66946958 0.42729586c5.61772317 3.67800775 33.63648398 23.70737607 33.52471211 56.97012166-0.05122845 15.42923833-6.36636501 37.85588963-36.16067584 57.07840058C952.72351744 467.53673671 593.69218048 648.15266361 547.23680711 671.50143602 540.12645717 675.61489067 518.73253603 686.29846243 488.40963527 686.29846243zM77.56949731 387.38200803c40.44528185 23.62587477 349.73094798 204.25577358 379.37506418 220.45111866 10.45536995 5.71203129 21.04114062 8.60879758 31.46390984 8.60879758 12.80375239 0 21.90621127-4.40103481 23.6701184-5.32082802l1.72199253-1.1934026 0.96054385-0.2875813c158.87388103-79.84386162 402.23832633-203.33365248 432.80339968-221.9402513-41.07283683-25.57723421-336.04466005-209.29833529-377.51335594-236.05267228-6.56546019-4.23570546-13.14838414-6.29534379-20.12484039-6.29534379-11.28318293 0-20.54747933 5.53156608-20.62781554 5.58745145l-1.83143651 1.27839573L77.56949731 387.38200803z",
            "p-id": "1225"
          }, null), createVNode("path", {
            "d": "M1017.1358117 544.96002845c0-18.66364928-16.04282141-33.80297842-35.83234503-33.80297842-8.60763363 0-16.50271801 2.86416555-22.68046792 7.64010382l-0.15485155-0.23053084C934.19026773 533.83518891 678.74393429 660.18914531 512.96694727 741.39756089l-0.98150058 0.2957312-1.76274319 1.18641664c-3.88990976 2.07244515-26.88124473 12.86080285-57.22743011-3.30077639-31.41966621-16.73091982-368.82771513-208.83843982-392.38838955-222.25926827-6.10556359-4.55588637-13.8131968-7.28033735-22.20077853-7.28033735-19.79068757 0-35.83350898 15.139328-35.83350897 33.80297842 0 13.81552469 8.79159182 25.68900608 21.38111431 30.93066183l-0.05239353 0.08615822c14.77141163 8.41319651 362.14699008 206.2350757 395.41672163 223.95215303 23.5304027 12.53130809 46.37619997 17.02665102 66.51850525 17.02665103 25.85433543 0 47.25873664-7.40724509 59.94722418-14.74113992 47.5544667-23.29754397 406.03392797-199.08397511 449.15592419-224.87427527C1007.96349554 571.16132466 1017.1358117 559.07361337 1017.1358117 544.96002845z",
            "p-id": "1226"
          }, null), createVNode("path", {
            "d": "M1017.1358117 679.05305373c0-18.66947129-16.04282141-33.80414237-35.83234503-33.80414237-8.60763363 0-16.50271801 2.86416555-22.68046792 7.63661085l-0.15485155-0.23053085C934.19026773 667.92239331 678.74393429 794.28100665 512.96694727 875.48942222l-0.98150058 0.2957312-1.76274319 1.18758059c-3.88990976 2.07244515-26.88124473 12.8596389-57.22743011-3.30194034-31.41966621-16.73091982-368.82771513-208.84309675-392.38838955-222.25926826-6.10556359-4.55472242-13.8131968-7.28033735-22.20077853-7.28033736-19.79068757 0-35.83350898 15.13467107-35.83350897 33.80297842 0 13.81668978 8.79159182 25.68900608 21.38111431 30.93182692l-0.05239353 0.08499314c14.77141163 8.41319651 362.14699008 206.23623965 395.41672163 223.95215302 23.5304027 12.53247203 46.37619997 17.02781497 66.51850525 17.02781498 25.85433543 0 47.25873664-7.40724509 59.94722418-14.74230386 47.5544667-23.29754397 406.03392797-199.08281117 449.15592419-224.87311019C1007.96349554 705.25434994 1017.1358117 693.16663865 1017.1358117 679.05305373z",
            "p-id": "1227"
          }, null)]);
        }
      };
      return createVNode(Icon, attrs, iconSlots);
    };
  }
});
const PasswordFilled = /* @__PURE__ */ defineComponent({
  setup(props, {
    attrs
  }) {
    return () => {
      const iconSlots = {
        component: (svgProps) => {
          return createVNode("svg", mergeProps({
            "viewBox": "0 0 1024 1024",
            "width": "1em",
            "height": "1em"
          }, svgProps), [createVNode("path", {
            "d": "M803.428295 409.14341h-34.28529563v-119.99994188a257.14299937 257.14299937 0 0 0-514.28599875 0v119.99994188h-34.28529562A102.85682438 102.85682438 0 0 0 117.71487969 512.00023437v85.71464532a394.28512031 394.28512031 0 0 0 788.57024062 0V512.00023437a102.85682438 102.85682438 0 0 0-102.85682531-102.85682437z m-445.7135325-119.99994188a154.2852375 154.2852375 0 0 1 308.570475 0v119.99994188H357.7157zM546.28435813 717.71482156a34.28529563 34.28529563 0 0 1-68.57059126 0V580.57176313a34.28529563 34.28529563 0 0 1 68.57059125 0z"
          }, null)]);
        }
      };
      return createVNode(Icon, attrs, iconSlots);
    };
  }
});
const UserFilled = /* @__PURE__ */ defineComponent({
  setup(props, {
    attrs
  }) {
    return () => {
      const iconSlots = {
        component: (svgProps) => {
          return createVNode("svg", mergeProps({
            "viewBox": "0 0 1024 1024",
            "width": "1em",
            "height": "1em"
          }, svgProps), [createVNode("path", {
            "d": "M511.99736328 586.99970703c110.54707031 0 212.58105469-96.57509766 224.01826172-237.81972656C747.97490234 201.39101562 649.8265625 62 511.99736328 62 374.1734375 62 276.01894531 201.39101562 287.98789063 349.17998047c11.43193359 141.24462891 113.46767578 237.81972656 224.00947265 237.81972656z m-2.00214844 76.23632813C262.5734375 663.23603516 62 761.62607422 62 882.996875c0 41.50283203 38.15419922 57.50068359 150.36416016 69.62783203C299.10869141 962 402.67285156 962 512 962c111.98496094 0 223.04619141 0 301.17919922-9.37529297 110.52773437-13.26269531 148.82080078-28.125 148.82080078-69.62783203 0-121.37080078-204.59179688-219.76083984-452.00478516-219.76083984z"
          }, null)]);
        }
      };
      return createVNode(Icon, attrs, iconSlots);
    };
  }
});
const OutIcon = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    type: {
      type: [String, Function],
      default: void 0
    }
  },
  setup(props, {
    attrs
  }) {
    return () => {
      if (isFunction(props.type)) {
        return props.type(attrs);
      }
      if (props.type && isString(props.type)) {
        return createVNode(IconFont, {
          "type": props.type
        }, null);
      }
      return createVNode(MenuOutlined, null, null);
    };
  }
});
const logo__text = "_logo__text_ult04_5";
const styles$i = {
  "sidebar-logo": "_sidebar-logo_ult04_1",
  logo__text
};
const cx$k = classNames.bind(styles$i);
const Logo = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    return () => {
      return createVNode("div", {
        "class": cx$k("sidebar-logo")
      }, [createVNode("div", {
        "class": cx$k("logo__text")
      }, ["-"])]);
    };
  }
});
function useShowTitle() {
  const { appContext } = getCurrentInstance();
  const { globalProperties } = appContext ? appContext.config : {};
  const { $t, $te } = globalProperties || {};
  const prefix = "routes.";
  function showTitle(route) {
    const { title } = route.meta || {};
    if (isFunction($t) && isFunction($te) && route.name) {
      const key = prefix + route.name;
      return $te(key) ? $t(key) : title || route.name;
    }
    return title || route.name;
  }
  return { showTitle };
}
function hasChild(item) {
  return !!(item.children && item.children.length !== 0);
}
const sidebar = "_sidebar_159ra_1";
const styles$h = {
  sidebar,
  "sidebar-content": "_sidebar-content_159ra_9",
  "sidebar-content__wrap": "_sidebar-content__wrap_159ra_25"
};
function _isSlot$d(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const cx$j = classNames.bind(styles$h);
function showChildren(item) {
  return !!(item.children && item.children.length > 1);
}
function createFlatMenus(menus) {
  const flatMenus = [];
  function loopMenus(childMenus, parent) {
    return childMenus.forEach((item) => {
      const nextItem = {
        ...item,
        parent
      };
      if (item && hasChild(item)) {
        nextItem.children = loopMenus(nextItem.children, nextItem);
      }
      flatMenus.push(nextItem);
    });
  }
  loopMenus(menus, null);
  return flatMenus;
}
function createMenuItem(item, showTitle) {
  if (item.children && item.children.length === 1) {
    const soleItem = head(item.children) || {};
    return createVNode(Menu.Item, {
      "key": soleItem.name
    }, {
      default: () => [createVNode("span", null, [showTitle && showTitle(soleItem)])],
      icon: () => createVNode(OutIcon, {
        "type": soleItem.icon || item.icon
      }, null)
    });
  } else {
    return showChildren(item) ? createVNode(XSubMenu, {
      "option": item,
      "key": item.name
    }, null) : createVNode(Menu.Item, {
      "key": item.name
    }, {
      default: () => [createVNode("span", null, [showTitle && showTitle(item)])],
      icon: () => createVNode(OutIcon, {
        "type": item.icon
      }, null)
    });
  }
}
const XSubMenu = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    ...Menu.SubMenu.props,
    option: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const {
      showTitle
    } = useShowTitle();
    return () => {
      const {
        option,
        ...restProps
      } = props;
      const subMenuSlots = {
        title: () => {
          return createVNode(Fragment, null, [createVNode(OutIcon, {
            "type": option.icon
          }, null), createVNode("span", null, [showTitle && showTitle(option)])]);
        }
      };
      return createVNode(Menu.SubMenu, mergeProps(restProps, {
        "key": option.name
      }), {
        default: () => [option.children.map((item) => {
          return createMenuItem(item, showTitle);
        })],
        ...subMenuSlots
      });
    };
  }
});
const index$6 = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    route: {
      type: Object,
      default: void 0
    },
    collapsed: {
      type: Boolean,
      default: false
    },
    menus: {
      type: Array,
      default: () => []
    },
    onChange: {
      type: Function,
      default: void 0
    }
  },
  emits: ["change"],
  setup(props, {
    emit
  }) {
    const {
      showTitle
    } = useShowTitle();
    const FlatMenus = createFlatMenus(props.menus);
    const selectedKeys = ref([]);
    const openKeys = ref([]);
    watch(() => props.route, (currentRoute) => {
      const {
        meta,
        name
      } = currentRoute || {};
      if (meta.hltInName) {
        selectedKeys.value = [meta.hltInName];
      } else {
        selectedKeys.value = [name];
        if (!props.collapsed) {
          setOpenKeys(findMenuKeys(FlatMenus, name));
        }
      }
    }, {
      deep: true,
      immediate: true
    });
    function setOpenKeys(value) {
      openKeys.value = value;
    }
    function onSelectMenu(params) {
      const {
        route: currentRoute
      } = props;
      if (currentRoute.name !== params.key) {
        emit("change", params.key);
      }
    }
    function findMenuKeys(flatMenus, lastKey) {
      let result2 = flatMenus.find((item) => item.name === lastKey);
      const keys = [];
      while (result2 && !isNil(result2)) {
        keys.push(result2.name);
        result2 = result2.parent;
      }
      return reverse(keys);
    }
    function onOpenChange(keys) {
      const lastKey = last(keys);
      const latestKey = keys.find((key) => unref(openKeys).indexOf(key) === -1);
      if (latestKey && !isNil(latestKey)) {
        setOpenKeys(findMenuKeys(FlatMenus, lastKey));
      } else {
        const findIndex = unref(openKeys).findIndex((key) => keys.indexOf(key) === -1);
        setOpenKeys(dropRight(unref(openKeys), unref(openKeys).length - findIndex));
      }
    }
    return () => {
      const {
        menus,
        collapsed
      } = props;
      const sideStyle = {
        width: collapsed ? "80px" : "256px"
      };
      const menuProps = {
        style: sideStyle,
        inlineCollapsed: collapsed,
        selectedKeys: unref(selectedKeys),
        openKeys: unref(openKeys),
        onSelect: onSelectMenu,
        onOpenChange,
        theme: "dark",
        mode: "inline"
      };
      const children = menus.map((item) => {
        return createMenuItem(item, showTitle);
      });
      return createVNode("div", {
        "class": cx$j("sidebar"),
        "style": sideStyle
      }, [createVNode("div", {
        "class": cx$j("sidebar-content")
      }, [createVNode("div", {
        "class": cx$j("sidebar-content__wrap")
      }, [createVNode(Logo, {
        "collapsed": collapsed
      }, null), createVNode(Menu, menuProps, _isSlot$d(children) ? children : {
        default: () => [children]
      })])])]);
    };
  }
});
function stopPropagation(event) {
  event.stopPropagation();
}
function preventDefault(event, isStopPropagation) {
  if (!isBoolean(event.cancelable) || event.cancelable) {
    event.preventDefault();
  }
  if (isStopPropagation) {
    stopPropagation(event);
  }
}
const tag$1 = "_tag_1ovzm_1";
const tag_text = "_tag_text_1ovzm_26";
const close = "_close_1ovzm_32";
const styles$g = {
  tag: tag$1,
  "dot-inner": "_dot-inner_1ovzm_15",
  "dot-inner__primary": "_dot-inner__primary_1ovzm_23",
  tag_text,
  close
};
const cx$i = classNames.bind(styles$g);
const Tag = /* @__PURE__ */ defineComponent({
  props: {
    closable: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "default"
      // primary
    },
    onClick: {
      type: Function,
      default: void 0
    },
    onClose: {
      type: Function,
      default: void 0
    }
  },
  emits: ["click", "close"],
  setup(props, {
    emit,
    slots
  }) {
    function onClick(evt) {
      emit("click", evt);
    }
    function onClose(evt) {
      preventDefault(evt, true);
      emit("close", evt);
    }
    return () => {
      const {
        closable,
        color
      } = props;
      const dotInnerClass = cx$i("dot-inner", {
        "dot-inner__primary": color === "primary"
      });
      return createVNode("div", {
        "class": cx$i("tag"),
        "onClick": onClick
      }, [createVNode("span", {
        "class": dotInnerClass
      }, null), createVNode("span", {
        "class": cx$i("tag_text")
      }, [slots.default && slots.default()]), closable && createVNode("span", {
        "class": cx$i("close"),
        "onClick": withModifiers(onClose, ["stop"])
      }, [createVNode(CloseOutlined, null, null)])]);
    };
  }
});
function isEmpty(value) {
  return isEqual(value, "") || isNil(value) || isNaN(value);
}
function omitNil(object = {}) {
  return omitBy(object, isEmpty);
}
const button = "_button_io96o_15";
const tag = "_tag_io96o_1";
const styles$f = {
  "tags-nav-wrap": "_tags-nav-wrap_io96o_1",
  "tags-nav": "_tags-nav_io96o_1",
  button,
  "btn-wrap": "_btn-wrap_io96o_34",
  "left-btn": "_left-btn_io96o_41",
  "right-btn": "_right-btn_io96o_44",
  "close-wrap": "_close-wrap_io96o_47",
  tag,
  "scroll-outer": "_scroll-outer_io96o_76",
  "scroll-body": "_scroll-body_io96o_86"
};
const cx$h = classNames.bind(styles$f);
const outerPadding = 4;
const index$5 = /* @__PURE__ */ defineComponent({
  props: {
    homeName: {
      type: String,
      default: void 0
    },
    route: {
      type: Object,
      default: void 0
    },
    tags: {
      type: Array,
      default: () => []
    },
    onClick: {
      type: Function,
      default: void 0
    },
    onClose: {
      type: Function,
      default: void 0
    }
  },
  emits: ["click", "close"],
  setup(props, {
    emit
  }) {
    let tagRefsMap = {};
    const scrollOuterRef = ref(null);
    const scrollBodyRef = ref(null);
    const {
      showTitle
    } = useShowTitle();
    const bodyLeft = ref(0);
    function onTagRefs(key, instance) {
      if (key && isString(key)) {
        const values = {
          ...tagRefsMap,
          [key]: instance
        };
        tagRefsMap = omitNil(values);
      }
    }
    watch(() => props.route, (currentRoute) => {
      currentRoute && getTagInstanceByRoute(currentRoute.name);
    }, {
      immediate: true,
      deep: true
    });
    function setBodyLeft(value) {
      bodyLeft.value = value;
    }
    function onClick(current) {
      return function() {
        getTagInstanceByRoute(current.name);
        emit("click", current);
      };
    }
    function onClose(current) {
      return function() {
        const {
          route: currentRoute,
          tags
        } = props;
        const result2 = tags.filter((item) => {
          return item.name !== current.name;
        });
        if (currentRoute.name === current.name) {
          const len = result2.length - 1;
          const index2 = tags.findIndex((item) => {
            return item.name === current.name;
          });
          const value = len >= index2 ? index2 : len;
          emit("close", result2, result2[value].name);
        } else {
          emit("close", result2);
        }
      };
    }
    function onMenuClose(type) {
      const {
        homeName,
        route: currentRoute,
        tags
      } = props;
      const finalAction = {
        all: () => {
          const result2 = tags.filter((item) => {
            return item.name === homeName;
          });
          emit("close", result2, homeName);
          setTimeout(() => {
            getTagInstanceByRoute(homeName);
          }, 100);
        },
        others: () => {
          const result2 = tags.filter((item) => {
            return item.name === currentRoute.name || item.name === homeName;
          });
          emit("close", result2);
          setTimeout(() => {
            getTagInstanceByRoute(currentRoute.name);
          }, 100);
        }
      };
      finalAction[type] && finalAction[type]();
    }
    function handleScroll(offset) {
      const {
        offsetWidth: outerWidth
      } = unref(scrollOuterRef);
      const {
        offsetWidth: bodyWidth
      } = unref(scrollBodyRef);
      if (offset > 0) {
        setBodyLeft(Math.min(0, unref(bodyLeft) + offset));
      } else {
        if (outerWidth < bodyWidth) {
          if (unref(bodyLeft) < -(bodyWidth - outerWidth)) {
            setBodyLeft(unref(bodyLeft));
          } else {
            setBodyLeft(Math.max(unref(bodyLeft) + offset, outerWidth - bodyWidth));
          }
        } else {
          setBodyLeft(0);
        }
      }
    }
    function getTagInstanceByRoute(name) {
      nextTick().then(() => {
        setTimeout(() => {
          const instance = tagRefsMap[name] || {};
          instance.$el && onMoveToView(instance.$el);
        }, 0);
      });
    }
    function onMoveToView(evt) {
      const {
        offsetWidth: outerWidth
      } = unref(scrollOuterRef);
      const {
        offsetWidth: bodyWidth
      } = unref(scrollBodyRef);
      const {
        offsetLeft: left,
        offsetWidth: width
      } = evt;
      if (bodyWidth < outerWidth) {
        setBodyLeft(0);
      } else if (left < -unref(bodyLeft)) {
        setBodyLeft(-left + outerPadding);
      } else if (left > -unref(bodyLeft) && left + width < -unref(bodyLeft) + outerWidth) {
        setBodyLeft(Math.min(0, outerWidth - width - left - outerPadding));
      } else {
        setBodyLeft(-(left - (outerWidth - width - outerPadding)));
      }
    }
    return () => {
      const {
        tags,
        route: currentRoute,
        homeName
      } = props;
      const scrollBodyStyle = {
        left: unref(bodyLeft) + "px"
      };
      const tagNodes = tags.map((item) => {
        const {
          name: key
        } = item || {};
        const tagProps = {
          color: currentRoute.name === key ? "primary" : "default",
          closable: key !== homeName,
          onClick: onClick(item),
          onClose: onClose(item)
        };
        return createVNode(Tag, mergeProps(tagProps, {
          "class": cx$h("tag"),
          "key": key,
          "ref": onTagRefs.bind(null, key)
        }), {
          default: () => [showTitle && showTitle(item)]
        });
      });
      const dropdownSlots = {
        overlay: () => {
          return createVNode(Menu, {
            "selectedKeys": []
          }, {
            default: () => [createVNode(Menu.Item, {
              "onClick": onMenuClose.bind(null, "all")
            }, {
              default: () => [createTextVNode("关闭所有")]
            }), createVNode(Menu.Item, {
              "onClick": onMenuClose.bind(null, "others")
            }, {
              default: () => [createTextVNode("关闭其他")]
            })]
          });
        }
      };
      return createVNode("div", {
        "class": cx$h("tags-nav-wrap")
      }, [createVNode("div", {
        "class": cx$h("tags-nav")
      }, [createVNode("div", {
        "class": cx$h("btn-wrap", "left-btn")
      }, [createVNode(Button, {
        "class": cx$h("button"),
        "type": "text",
        "onClick": handleScroll.bind(null, 240)
      }, {
        icon: () => createVNode(LeftOutlined, null, null)
      })]), createVNode("div", {
        "class": cx$h("scroll-outer"),
        "ref": scrollOuterRef
      }, [createVNode("div", {
        "class": cx$h("scroll-body"),
        "style": scrollBodyStyle,
        "ref": scrollBodyRef
      }, [tagNodes])]), createVNode("div", {
        "class": cx$h("btn-wrap", "right-btn")
      }, [createVNode(Button, {
        "class": cx$h("button"),
        "type": "text",
        "onClick": handleScroll.bind(null, -240)
      }, {
        icon: () => createVNode(RightOutlined, null, null)
      })]), createVNode("div", {
        "class": cx$h("close-wrap")
      }, [createVNode(Dropdown, {
        "placement": "bottomRight"
      }, {
        default: () => [createVNode(Button, {
          "class": cx$h("button"),
          "type": "text"
        }, {
          icon: () => createVNode(CloseCircleOutlined, null, null)
        })],
        ...dropdownSlots
      })])])]);
    };
  }
});
function _isSlot$c(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const Breadcrumb = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    router: {
      type: Object,
      default: void 0
    }
  },
  setup(props) {
    const {
      showTitle
    } = useShowTitle();
    const levels = computed(() => {
      if (props.router && props.router.currentRoute) {
        return unref(props.router.currentRoute).matched.concat().filter((item) => {
          return !!item.meta.title;
        });
      } else {
        return [];
      }
    });
    return () => {
      let _slot;
      return createVNode(Breadcrumb$1, {
        "style": {
          marginLeft: "30px"
        }
      }, _isSlot$c(_slot = unref(levels).map((item) => {
        return createVNode(Breadcrumb$1.Item, null, {
          default: () => [showTitle && showTitle(item)]
        });
      })) ? _slot : {
        default: () => [_slot]
      });
    };
  }
});
const methodMap = [
  ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
  ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
  ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
  ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
  ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
];
const methods = methodMap.find((list) => {
  const exitFullscreenMethod = list[1];
  return exitFullscreenMethod in document;
});
const defaultMethod = head(methodMap);
const result = (methods || []).map((method, index2) => {
  return [defaultMethod[index2], method];
});
const native = fromPairs(result);
function on(el, type, listener, options) {
  el.addEventListener(type, listener, options);
}
function off(el, type, listener, options) {
  el.removeEventListener(type, listener, options);
}
const fullscreen = "_fullscreen_1s7ih_1";
const styles$e = {
  fullscreen
};
const cx$g = classNames.bind(styles$e);
const Fullscreen = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  setup() {
    const {
      fullscreenElement,
      exitFullscreen,
      requestFullscreen,
      fullscreenchange
    } = native;
    const fullest = ref(false);
    function onChange() {
      fullest.value = !unref(fullest);
    }
    function isFullscreen() {
      return fullscreenElement && !!document[fullscreenElement];
    }
    function handleFullscreen() {
      if (unref(fullest)) {
        exitFullscreen && document[exitFullscreen]();
      } else {
        requestFullscreen && document.body[requestFullscreen]();
      }
    }
    onMounted(() => {
      fullest.value = isFullscreen();
      fullscreenchange && on(document, fullscreenchange, onChange, false);
    });
    onBeforeUnmount(() => {
      fullscreenchange && off(document, fullscreenchange, onChange, false);
    });
    return () => {
      return createVNode("div", {
        "class": cx$g("fullscreen"),
        "onClick": handleFullscreen
      }, [unref(fullest) ? createVNode(ExitFullscreenOutlined, null, null) : createVNode(FullscreenOutlined, null, null)]);
    };
  }
});
const BaseKey$4 = Symbol("App");
function useAppInstance() {
  return inject(BaseKey$4, {});
}
const styles$d = {
  "avatar-wrap": "_avatar-wrap_1g6yn_1",
  "avatar-center": "_avatar-center_1g6yn_7",
  "avatar-center__icon-down": "_avatar-center__icon-down_1g6yn_12",
  "avatar-menu": "_avatar-menu_1g6yn_21"
};
const cx$f = classNames.bind(styles$d);
const Avatar = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  setup() {
    const {
      onLogout
    } = useAppInstance();
    function handleLogout() {
      onLogout && onLogout();
    }
    function getPopupContainer(trigger) {
      return trigger.parentNode || document.body;
    }
    return () => {
      const dropdownSlots = {
        overlay: () => {
          return createVNode(Menu, {
            "class": cx$f("avatar-menu"),
            "selectedKeys": []
          }, {
            default: () => [createVNode(Menu.Item, {
              "key": "center"
            }, {
              default: () => [createTextVNode("个人中心")],
              icon: () => createVNode(UserOutlined, null, null)
            }), createVNode(Menu.Item, {
              "key": "settings"
            }, {
              default: () => [createTextVNode("个人设置")],
              icon: () => createVNode(SettingOutlined, null, null)
            }), createVNode(Menu.Divider, null, null), createVNode(Menu.Item, {
              "key": "logout",
              "onClick": handleLogout
            }, {
              default: () => [createTextVNode("退出登录")],
              icon: () => createVNode(LoginOutlined, null, null)
            })]
          });
        }
      };
      return createVNode("div", {
        "class": cx$f("avatar-wrap")
      }, [createVNode(Dropdown, {
        "getPopupContainer": getPopupContainer,
        "placement": "bottomRight"
      }, {
        default: () => [createVNode("div", {
          "class": cx$f("avatar-center")
        }, [createVNode(Avatar$1, {
          "size": 28
        }, {
          icon: () => createVNode(UserOutlined, null, null)
        }), createVNode("div", {
          "class": cx$f("avatar-center__icon-down")
        }, [createVNode(CaretDownOutlined, null, null)])])],
        ...dropdownSlots
      })]);
    };
  }
});
class GalleryCache {
  constructor(target) {
    __publicField(this, "cache", null);
    this.cache = target;
  }
  set(key, value) {
    try {
      this.cache.setItem(key, value);
    } catch (err) {
      console.warn(err.message);
    }
  }
  setObj(key, value) {
    try {
      const nextValue = JSON.stringify(value);
      this.cache.setItem(key, nextValue);
    } catch (err) {
      console.warn(err.message);
    }
  }
  get(key) {
    try {
      const value = this.cache.getItem(key);
      return !isEmpty(value) ? value : void 0;
    } catch (err) {
      console.warn(err.message);
    }
    return void 0;
  }
  getObj(key) {
    try {
      const value = this.cache.getItem(key);
      const nextValue = JSON.parse(value || "null");
      return !isEmpty(nextValue) ? nextValue : void 0;
    } catch (err) {
      console.warn(err.message);
    }
    return void 0;
  }
  remove(key) {
    key && this.cache.removeItem(key);
  }
  clear() {
    this.cache.clear();
  }
}
const localCache = new GalleryCache(localStorage);
const LOCALE__LOCAL = "locale";
const styles$c = {
  "language-wrap": "_language-wrap_1uqw4_1",
  "language-center": "_language-center_1uqw4_7",
  "language-center__icon-down": "_language-center__icon-down_1uqw4_13",
  "language-menu": "_language-menu_1uqw4_22"
};
function _isSlot$b(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const cx$e = classNames.bind(styles$c);
const Language = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  setup() {
    const {
      setLocale
    } = useAppInstance();
    const {
      appContext
    } = getCurrentInstance();
    const {
      globalProperties
    } = appContext ? appContext.config : {};
    const {
      $i18n = {
        locale: "zh-CN"
      }
    } = globalProperties || {};
    const language = navigator.language;
    const localeLang = language === "zh-CN" || language === "en-US" ? language : false;
    const lang = localCache.get(LOCALE__LOCAL) || localeLang || "zh-CN";
    const langList = {
      "zh-CN": "语言",
      "en-US": "Lang"
    };
    const localeList = {
      "zh-CN": "中文简体",
      "en-US": "English"
    };
    const title = computed(() => {
      return langList[$i18n.locale];
    });
    onLocaleChange(lang);
    function onLocaleChange(value) {
      setLocale && setLocale(value);
      localCache.set(LOCALE__LOCAL, value);
    }
    function getPopupContainer(trigger) {
      return trigger.parentNode || document.body;
    }
    return () => {
      const dropdownSlots = {
        overlay: () => {
          let _slot;
          return createVNode(Menu, {
            "class": cx$e("language-menu"),
            "selectedKeys": [$i18n.locale]
          }, _isSlot$b(_slot = map(localeList, (value, key) => {
            return createVNode(Menu.Item, {
              "key": key,
              "onClick": onLocaleChange.bind(null, key)
            }, _isSlot$b(value) ? value : {
              default: () => [value]
            });
          })) ? _slot : {
            default: () => [_slot]
          });
        }
      };
      return createVNode("div", {
        "class": cx$e("language-wrap")
      }, [createVNode(Dropdown, {
        "placement": "bottom",
        "getPopupContainer": getPopupContainer
      }, {
        default: () => [createVNode("div", {
          "class": cx$e("language-center")
        }, [createVNode("span", null, [unref(title)]), createVNode("div", {
          "class": cx$e("language-center__icon-down")
        }, [createVNode(CaretDownOutlined, null, null)])])],
        ...dropdownSlots
      })]);
    };
  }
});
const navbar = "_navbar_1omr5_1";
const navbar__left = "_navbar__left_1omr5_12";
const navbar__right = "_navbar__right_1omr5_12";
const collapse = "_collapse_1omr5_22";
const collapse__icon = "_collapse__icon_1omr5_37";
const styles$b = {
  navbar,
  navbar__left,
  navbar__right,
  collapse,
  collapse__icon,
  "collapse__icon-down": "_collapse__icon-down_1omr5_41"
};
const cx$d = classNames.bind(styles$b);
const index$4 = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    router: {
      type: Object,
      default: void 0
    },
    collapsed: {
      type: Boolean,
      default: false
    },
    onChange: {
      type: Function,
      default: void 0
    }
  },
  emits: ["change"],
  setup(props, {
    emit
  }) {
    function handleCollapseClick() {
      emit("change", !props.collapsed);
    }
    return () => {
      const {
        router,
        collapsed
      } = props;
      const collapseClass = cx$d("collapse__icon", {
        "collapse__icon-down": !!collapsed
      });
      return createVNode("div", {
        "class": cx$d("navbar")
      }, [createVNode("div", {
        "class": cx$d("navbar__left")
      }, [createVNode("div", {
        "class": cx$d("collapse"),
        "onClick": handleCollapseClick
      }, [createVNode(HamburgerOutlined, {
        "class": collapseClass
      }, null)]), createVNode(Breadcrumb, {
        "router": router
      }, null)]), createVNode("div", {
        "class": cx$d("navbar__right")
      }, [createVNode(Space, {
        "size": 20
      }, {
        default: () => [createVNode(Fullscreen, null, null), createVNode(Language, null, null), createVNode(Avatar, null, null)]
      })])]);
    };
  }
});
const baseFieldProps = {
  text: {
    type: [String, Number, Boolean, Array, Object],
    default: void 0
  },
  mode: {
    type: String,
    default: "edit"
    // read只读模式 edit渲染编辑模式
  },
  placeholder: {
    type: String,
    default: void 0
  },
  valueType: {
    type: String,
    default: "text"
  },
  valueEnum: {
    type: Object,
    default: void 0
  },
  fieldProps: {
    // 组件Props
    type: Object,
    default: () => ({})
  },
  formItemProps: {
    type: Object,
    default: () => ({})
  },
  emptyText: {
    type: String,
    default: "-"
  },
  renderField: {
    type: Function,
    default: void 0
  }
};
const BaseKey$3 = Symbol("CustomFields");
function useCustomFields() {
  return inject(BaseKey$3, {});
}
const index$3 = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    valueTypeMap: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, {
    slots
  }) {
    const valueTypeMap = computed(() => {
      return props.valueTypeMap;
    });
    provide(BaseKey$3, {
      valueTypeMap
    });
    return () => {
      return slots.default && slots.default();
    };
  }
});
const zhCN = {
  locale: "zh-CN",
  global: {
    inputPlaceholder: "请输入",
    selectPlaceholder: "请选择",
    open: "打开",
    close: "关闭"
  },
  Form: {
    okText: "确定",
    cancelText: "取消",
    search: "查询",
    reset: "重置",
    submit: "提交",
    collapsed: "展开",
    expand: "收起"
  },
  Table: {
    toolbar: {
      reload: "刷新",
      export: "导出",
      density: "密度",
      densityLarger: "默认",
      densityMiddle: "中等",
      densitySmall: "紧凑",
      columnSetting: "列设置",
      columnDisplay: "列展示",
      reset: "重置",
      leftPin: "固定在列首",
      rightPin: "固定在列尾",
      noPin: "不固定"
    },
    alert: {
      clear: "取消选择",
      selected: "已选择",
      item: "项"
    },
    pagination: {
      range: "第",
      total: "条/总共",
      item: "条"
    }
  }
};
const BaseKey$2 = Symbol("LocaleData");
function useLocaleReceiver(path2, defaultLocale, propsLocale) {
  const state = inject(BaseKey$2, {});
  const locale = computed(() => {
    const locale2 = unref(defaultLocale) || get(zhCN, path2 || ["global"], {});
    const localeContext = path2 && state.locale ? get(state.locale, path2, {}) : {};
    return {
      ...locale2,
      ...localeContext,
      ...unref(propsLocale) || {}
    };
  });
  function translate(path3) {
    return get(unref(locale), path3, path3);
  }
  return {
    locale,
    t: translate
  };
}
function formatDate(text, format) {
  if (isEmpty(text))
    return text;
  if (isFunction(format))
    return format(dayjs(text));
  return dayjs(text).format(format || "YYYY-MM-DD");
}
function cloneProxyToRaw(proxy) {
  return cloneWith(proxy, (value) => {
    if (isProxy(value)) {
      const nextValue = toRaw(value);
      return cloneDeep(nextValue);
    } else {
      return value;
    }
  });
}
function isValidElement(c) {
  return c && c.__v_isVNode && !isSymbol(c.type);
}
function isEmptyText(c) {
  return c && c.type === Text && c.children.trim() === "";
}
function isEmptyFragment(c) {
  return c && c.type === Fragment && c.children.length === 0;
}
function isEmptyElement(c) {
  return c && (c.type === Comment || isEmptyText(c) || isEmptyFragment(c));
}
function filterEmptyElement(children) {
  const result2 = [];
  if (isArray(children) && children.length !== 0) {
    children.forEach((child) => {
      if (isArray(child)) {
        result2.push(...child);
      } else if (child && child.type === Fragment && isArray(child.children)) {
        result2.push(...filterEmptyElement(child.children));
      } else if (child) {
        result2.push(child);
      }
    });
  }
  return result2.filter((c) => !isEmptyElement(c));
}
function getSlot(slots, props, name = "default") {
  const result2 = props[name] || slots[name];
  return isFunction(result2) ? result2 : void 0;
}
function getSlotVNode(slots, props, name = "default", slotScope) {
  const result2 = props[name] || slots[name];
  return isFunction(result2) ? result2(slotScope) : void 0;
}
function getPropsSlot(slots, props, name = "default", slotScope) {
  const result2 = props[name] ?? slots[name];
  return isFunction(result2) ? result2(slotScope) : result2;
}
const FieldDatePicker = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    ...baseFieldProps
  },
  setup(props, {
    slots
  }) {
    const {
      t
    } = useLocaleReceiver(["global"]);
    return () => {
      const {
        mode,
        text,
        emptyText,
        fieldProps
      } = props;
      const placeholder = fieldProps.placeholder || t("selectPlaceholder");
      if (mode === "read") {
        const valueText = formatDate(text, fieldProps.format);
        return valueText ?? emptyText;
      }
      const needFieldProps = {
        allowClear: true,
        ...fieldProps,
        placeholder
      };
      const dom = createVNode(DatePicker, needFieldProps, slots);
      const slotScope = {
        text,
        props: {
          mode,
          ...fieldProps
        },
        dom
      };
      const renderDom = getSlotVNode(slots, props, "renderField", slotScope);
      return renderDom || dom;
    };
  }
});
const FieldRangePicker = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    ...baseFieldProps
  },
  setup(props, {
    slots
  }) {
    const {
      t
    } = useLocaleReceiver(["global"]);
    return () => {
      const {
        mode,
        text,
        emptyText,
        fieldProps
      } = props;
      const placeholder = fieldProps.placeholder || [t("selectPlaceholder"), t("selectPlaceholder")];
      if (mode === "read") {
        const [startText, endText] = isArray(text) ? text : [];
        const valueStartText = formatDate(startText, fieldProps.format);
        const valueEndText = formatDate(endText, fieldProps.format);
        return createVNode(Fragment, null, [valueStartText ?? emptyText, "~", valueEndText ?? emptyText]);
      }
      const needFieldProps = {
        allowClear: true,
        ...fieldProps,
        placeholder
      };
      const dom = createVNode(RangePicker, needFieldProps, slots);
      const slotScope = {
        text,
        props: {
          mode,
          ...fieldProps
        },
        dom
      };
      const renderDom = getSlotVNode(slots, props, "renderField", slotScope);
      return renderDom || dom;
    };
  }
});
const FieldTimePicker = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    ...baseFieldProps
  },
  setup(props, {
    slots
  }) {
    const {
      t
    } = useLocaleReceiver(["global"]);
    return () => {
      const {
        mode,
        text,
        emptyText,
        fieldProps
      } = props;
      const placeholder = fieldProps.placeholder || t("selectPlaceholder");
      if (mode === "read") {
        const valueText = formatDate(text, fieldProps.format);
        return valueText ?? emptyText;
      }
      const needFieldProps = {
        allowClear: true,
        ...fieldProps,
        placeholder
      };
      const dom = createVNode(TimePicker, needFieldProps, slots);
      const slotScope = {
        text,
        props: {
          mode,
          ...fieldProps
        },
        dom
      };
      const renderDom = getSlotVNode(slots, props, "renderField", slotScope);
      return renderDom || dom;
    };
  }
});
const FieldTimeRangePicker = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    ...baseFieldProps
  },
  setup(props, {
    slots
  }) {
    const {
      t
    } = useLocaleReceiver(["global"]);
    return () => {
      const {
        mode,
        text,
        emptyText,
        fieldProps
      } = props;
      const placeholder = fieldProps.placeholder || [t("selectPlaceholder"), t("selectPlaceholder")];
      if (mode === "read") {
        const [startText, endText] = isArray(text) ? text : [];
        const valueStartText = formatDate(startText, fieldProps.format);
        const valueEndText = formatDate(endText, fieldProps.format);
        return createVNode(Fragment, null, [valueStartText ?? emptyText, "~", valueEndText ?? emptyText]);
      }
      const needFieldProps = {
        allowClear: true,
        ...fieldProps,
        placeholder
      };
      const dom = createVNode(TimeRangePicker, needFieldProps, slots);
      const slotScope = {
        text,
        props: {
          mode,
          ...fieldProps
        },
        dom
      };
      const renderDom = getSlotVNode(slots, props, "renderField", slotScope);
      return renderDom || dom;
    };
  }
});
function valueEnumToOptions(valueEnum = {}) {
  const options = map(valueEnum, (value, key) => {
    if (isEmpty(value))
      return value;
    if (isObject(value) && value.text) {
      const {
        text,
        disabled
      } = value;
      return {
        value: key,
        label: text,
        disabled
      };
    }
    return {
      value: key,
      label: value
    };
  });
  return compact(options);
}
function optionsToValueEnum(options = [], fieldNames) {
  const {
    value = "value",
    label = "label",
    children = "children"
  } = fieldNames || {};
  const traverseOptions = (values) => {
    const result3 = [];
    if (isArray(values) && values.length !== 0) {
      values.forEach((item) => {
        const key = item[value], text = item[label];
        const curChildren = item[children];
        if (!(isEmpty(key) || isEmpty(text))) {
          result3.push([key, text]);
        }
        if (isArray(curChildren) && curChildren.length !== 0) {
          result3.push(...traverseOptions(curChildren));
        }
      });
    }
    return result3;
  };
  const result2 = traverseOptions(options);
  return fromPairs(result2);
}
function valueEnumToText(text, valueEnum = {}) {
  if (isEmpty(text))
    return text;
  if (isArray(text)) {
    const children = compact(text).map((value) => {
      return valueEnumToText(value, valueEnum);
    });
    const spaceSlots = {
      split: () => ","
    };
    return createVNode(Space, {
      "size": 2,
      "wrap": true
    }, {
      default: () => [children],
      ...spaceSlots
    });
  }
  if (isString(text) || isNumber(text)) {
    const plain = valueEnum[text];
    if (plain && isObject(plain)) {
      return createVNode(Badge, plain, null);
    }
    return isEmpty(plain) ? text : plain;
  }
  return isObject(text) ? text.label : text;
}
const FieldSelect = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    ...baseFieldProps
  },
  setup(props, {
    slots
  }) {
    const {
      t
    } = useLocaleReceiver(["global"]);
    const options = computed(() => {
      if (isUndefined(props.valueEnum)) {
        return props.fieldProps.options || [];
      }
      return valueEnumToOptions(props.valueEnum);
    });
    return () => {
      const {
        mode,
        text,
        emptyText,
        valueEnum,
        fieldProps
      } = props;
      const placeholder = fieldProps.placeholder || t("selectPlaceholder");
      if (mode === "read") {
        const {
          options: propsOptions,
          fieldNames
        } = fieldProps;
        const optionsValueEnum = optionsToValueEnum(propsOptions, fieldNames);
        const valueText = valueEnumToText(text, valueEnum || optionsValueEnum);
        return valueText ?? emptyText;
      }
      const needFieldProps = {
        options: unref(options),
        allowClear: true,
        ...fieldProps,
        placeholder
      };
      const dom = createVNode(Select$1, needFieldProps, slots);
      const slotScope = {
        text,
        props: {
          mode,
          ...fieldProps
        },
        dom
      };
      const renderDom = getSlotVNode(slots, props, "renderField", slotScope);
      return renderDom || dom;
    };
  }
});
const FieldTreeSelect = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    ...baseFieldProps
  },
  setup(props, {
    slots
  }) {
    const {
      t
    } = useLocaleReceiver(["global"]);
    return () => {
      const {
        mode,
        text,
        emptyText,
        fieldProps
      } = props;
      const {
        options,
        ...restFieldProps
      } = fieldProps;
      const placeholder = fieldProps.placeholder || t("selectPlaceholder");
      if (mode === "read") {
        const {
          options: propsOptions,
          fieldNames
        } = fieldProps;
        const optionsValueEnum = optionsToValueEnum(propsOptions, fieldNames);
        const valueText = valueEnumToText(text, optionsValueEnum);
        return valueText ?? emptyText;
      }
      const needFieldProps = {
        treeData: options,
        allowClear: true,
        ...restFieldProps,
        placeholder
      };
      const dom = createVNode(TreeSelect$1, needFieldProps, slots);
      const slotScope = {
        text,
        props: {
          mode,
          ...fieldProps
        },
        dom
      };
      const renderDom = getSlotVNode(slots, props, "renderField", slotScope);
      return renderDom || dom;
    };
  }
});
const FieldCascader = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    ...baseFieldProps
  },
  setup(props, {
    slots
  }) {
    const {
      t
    } = useLocaleReceiver(["global"]);
    return () => {
      const {
        mode,
        text,
        emptyText,
        fieldProps
      } = props;
      const placeholder = fieldProps.placeholder || t("selectPlaceholder");
      if (mode === "read") {
        const {
          options: propsOptions,
          fieldNames
        } = fieldProps;
        const optionsValueEnum = optionsToValueEnum(propsOptions, fieldNames);
        const valueText = valueEnumToText(text, optionsValueEnum);
        return valueText ?? emptyText;
      }
      const needFieldProps = {
        allowClear: true,
        ...fieldProps,
        placeholder
      };
      const dom = createVNode(Cascader$1, needFieldProps, slots);
      const slotScope = {
        text,
        props: {
          mode,
          ...fieldProps
        },
        dom
      };
      const renderDom = getSlotVNode(slots, props, "renderField", slotScope);
      return renderDom || dom;
    };
  }
});
const FieldRadio = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    ...baseFieldProps
  },
  setup(props, {
    slots
  }) {
    const options = computed(() => {
      if (isUndefined(props.valueEnum)) {
        return props.fieldProps.options || [];
      }
      return valueEnumToOptions(props.valueEnum);
    });
    return () => {
      const {
        mode,
        text,
        emptyText,
        valueEnum,
        fieldProps
      } = props;
      if (mode === "read") {
        const {
          options: propsOptions,
          fieldNames
        } = fieldProps;
        const optionsValueEnum = optionsToValueEnum(propsOptions, fieldNames);
        const valueText = valueEnumToText(text, valueEnum || optionsValueEnum);
        return valueText ?? emptyText;
      }
      const needFieldProps = {
        options: unref(options),
        ...fieldProps
      };
      const dom = createVNode(Radio$1.Group, needFieldProps, slots);
      const slotScope = {
        text,
        props: {
          mode,
          ...fieldProps
        },
        dom
      };
      const renderDom = getSlotVNode(slots, props, "renderField", slotScope);
      return renderDom || dom;
    };
  }
});
const FieldCheckbox = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    ...baseFieldProps
  },
  setup(props, {
    slots
  }) {
    const options = computed(() => {
      if (isUndefined(props.valueEnum)) {
        return props.fieldProps.options || [];
      }
      return valueEnumToOptions(props.valueEnum);
    });
    return () => {
      const {
        mode,
        text,
        emptyText,
        valueEnum,
        fieldProps
      } = props;
      if (mode === "read") {
        const {
          options: propsOptions,
          fieldNames
        } = fieldProps;
        const optionsValueEnum = optionsToValueEnum(propsOptions, fieldNames);
        const valueText = valueEnumToText(text, valueEnum || optionsValueEnum);
        return valueText ?? emptyText;
      }
      const needFieldProps = {
        options: unref(options),
        ...fieldProps
      };
      const dom = createVNode(Checkbox$1.Group, needFieldProps, slots);
      const slotScope = {
        text,
        props: {
          mode,
          ...fieldProps
        },
        dom
      };
      const renderDom = getSlotVNode(slots, props, "renderField", slotScope);
      return renderDom || dom;
    };
  }
});
const FieldSwitch = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    ...baseFieldProps
  },
  setup(props, {
    slots
  }) {
    const {
      t
    } = useLocaleReceiver(["global"]);
    function onUpdateChecked(value) {
      const {
        fieldProps
      } = props;
      if (isFunction(fieldProps["onUpdate:value"])) {
        fieldProps["onUpdate:value"](value);
      }
    }
    return () => {
      const {
        mode,
        text,
        fieldProps
      } = props;
      const {
        value,
        checked,
        style,
        ...restFieldProps
      } = fieldProps;
      if (mode === "read") {
        const open = fieldProps.checkedChildren ?? t("open");
        const close2 = fieldProps.unCheckedChildren ?? t("close");
        return text ? open : close2;
      }
      const needFieldProps = {
        ...restFieldProps,
        checked: checked || value,
        "onUpdate:checked": onUpdateChecked
      };
      const dom = createVNode("div", {
        "style": style
      }, [createVNode(Switch$1, needFieldProps, slots)]);
      const slotScope = {
        text,
        props: {
          mode,
          ...fieldProps
        },
        dom
      };
      const renderDom = getSlotVNode(slots, props, "renderField", slotScope);
      return renderDom || dom;
    };
  }
});
const FieldSlider = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    ...baseFieldProps
  },
  setup(props, {
    slots
  }) {
    return () => {
      const {
        mode,
        text,
        emptyText,
        fieldProps
      } = props;
      if (mode === "read") {
        if (isArray(text)) {
          const [startText, endText] = text;
          return createVNode(Fragment, null, [startText ?? emptyText, "~", endText ?? emptyText]);
        }
        return text ?? emptyText;
      }
      const needFieldProps = {
        style: {
          minWidth: 120,
          ...fieldProps.style
        },
        ...fieldProps
      };
      const dom = createVNode(Slider$1, needFieldProps, slots);
      const slotScope = {
        text,
        props: {
          mode,
          ...fieldProps
        },
        dom
      };
      const renderDom = getSlotVNode(slots, props, "renderField", slotScope);
      return renderDom || dom;
    };
  }
});
const FieldNumber = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    ...baseFieldProps
  },
  setup(props, {
    slots
  }) {
    const {
      t
    } = useLocaleReceiver(["global"]);
    return () => {
      const {
        mode,
        text,
        emptyText,
        fieldProps
      } = props;
      const placeholder = fieldProps.placeholder || t("inputPlaceholder");
      if (mode === "read") {
        const prefixDom = getPropsSlot(slots, fieldProps, "prefix");
        const suffixDom = getPropsSlot(slots, fieldProps, "suffix");
        return createVNode(Fragment, null, [prefixDom, text ?? emptyText, suffixDom]);
      }
      const needFieldProps = {
        min: 0,
        ...fieldProps,
        placeholder
      };
      const dom = createVNode(InputNumber, needFieldProps, slots);
      const slotScope = {
        text,
        props: {
          mode,
          ...fieldProps
        },
        dom
      };
      const renderDom = getSlotVNode(slots, props, "renderField", slotScope);
      return renderDom || dom;
    };
  }
});
const FieldTextArea = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    ...baseFieldProps
  },
  setup(props, {
    slots
  }) {
    const {
      t
    } = useLocaleReceiver(["global"]);
    function onKeyPress(evt) {
      if (evt.key === "Enter") {
        stopPropagation(evt);
      }
    }
    return () => {
      const {
        mode,
        text,
        emptyText,
        fieldProps
      } = props;
      const placeholder = fieldProps.placeholder || t("inputPlaceholder");
      if (mode === "read") {
        const styles2 = {
          display: "inline-block",
          padding: "4px 11px",
          lineHeight: "1.5715",
          maxWidth: "100%",
          whiteSpace: "pre-wrap"
        };
        return createVNode("span", {
          "class": "field-textarea__read",
          "style": styles2
        }, [text ?? emptyText]);
      }
      const needFieldProps = {
        rows: 3,
        onKeyPress,
        ...fieldProps,
        placeholder
      };
      const dom = createVNode(Input.TextArea, needFieldProps, slots);
      const slotScope = {
        text,
        props: {
          mode,
          ...fieldProps
        },
        dom
      };
      const renderDom = getSlotVNode(slots, props, "renderField", slotScope);
      return renderDom || dom;
    };
  }
});
const FieldText = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    ...baseFieldProps,
    type: {
      type: String,
      default: "text"
    }
  },
  setup(props, {
    slots
  }) {
    const {
      t
    } = useLocaleReceiver(["global"]);
    return () => {
      const {
        type,
        mode,
        text,
        emptyText,
        fieldProps
      } = props;
      const placeholder = fieldProps.placeholder || t("inputPlaceholder");
      if (mode === "read") {
        const prefixDom = getPropsSlot(slots, fieldProps, "prefix");
        const suffixDom = getPropsSlot(slots, fieldProps, "suffix");
        return createVNode(Fragment, null, [prefixDom, text ?? emptyText, suffixDom]);
      }
      const needFieldProps = {
        type,
        allowClear: true,
        ...fieldProps,
        placeholder
      };
      const dom = createVNode(Input, needFieldProps, slots);
      const slotScope = {
        text,
        props: {
          mode,
          ...fieldProps
        },
        dom
      };
      const renderDom = getSlotVNode(slots, props, "renderField", slotScope);
      return renderDom || dom;
    };
  }
});
const FieldPassword = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    ...baseFieldProps
  },
  setup(props, {
    slots
  }) {
    const {
      t
    } = useLocaleReceiver(["global"]);
    const {
      fieldProps
    } = props;
    const visible = ref(fieldProps.visible || false);
    function onVisibleClick(evt) {
      preventDefault(evt);
      visible.value = !unref(visible);
    }
    return () => {
      const {
        mode,
        text,
        emptyText,
        fieldProps: fieldProps2
      } = props;
      const placeholder = fieldProps2.placeholder || t("inputPlaceholder");
      if (mode === "read") {
        if (isEmpty(text)) {
          return createVNode(Fragment, null, [emptyText]);
        }
        const eyeIcon = unref(visible) ? createVNode(EyeOutlined, null, null) : createVNode(EyeInvisibleOutlined, null, null);
        return createVNode(Space, null, {
          default: () => [createVNode("span", null, [unref(visible) ? text : "＊＊＊＊＊"]), createVNode("a", {
            "onClick": onVisibleClick
          }, [eyeIcon])]
        });
      }
      const needFieldProps = {
        allowClear: true,
        ...fieldProps2,
        placeholder
      };
      const dom = createVNode(Input.Password, needFieldProps, slots);
      const slotScope = {
        text,
        props: {
          mode,
          ...fieldProps2
        },
        dom
      };
      const renderDom = getSlotVNode(slots, props, "renderField", slotScope);
      return renderDom || dom;
    };
  }
});
function mergeFieldProps(props, extraFieldProps) {
  const fieldProps = {
    ...props.fieldProps,
    ...extraFieldProps
  };
  return {
    ...props,
    fieldProps
  };
}
function defaultRenderText(valueType, props, slots) {
  if (valueType === "date") {
    const dateProps = mergeFieldProps(props, {
      picker: "date",
      format: "YYYY-MM-DD"
    });
    return createVNode(FieldDatePicker, dateProps, slots);
  }
  if (valueType === "dateRange") {
    const dateProps = mergeFieldProps(props, {
      picker: "date",
      format: "YYYY-MM-DD"
    });
    return createVNode(FieldRangePicker, dateProps, slots);
  }
  if (valueType === "dateWeek") {
    const dateProps = mergeFieldProps(props, {
      picker: "week",
      format: "YYYY-wo"
    });
    return createVNode(FieldDatePicker, dateProps, slots);
  }
  if (valueType === "dateWeekRange") {
    const dateProps = mergeFieldProps(props, {
      picker: "week",
      format: "YYYY-wo"
    });
    return createVNode(FieldRangePicker, dateProps, slots);
  }
  if (valueType === "dateMonth") {
    const dateProps = mergeFieldProps(props, {
      picker: "month",
      format: "YYYY-MM"
    });
    return createVNode(FieldDatePicker, dateProps, slots);
  }
  if (valueType === "dateMonthRange") {
    const dateProps = mergeFieldProps(props, {
      picker: "month",
      format: "YYYY-MM"
    });
    return createVNode(FieldRangePicker, dateProps, slots);
  }
  if (valueType === "dateQuarter") {
    const dateProps = mergeFieldProps(props, {
      picker: "quarter",
      format: "YYYY-[Q]Q"
    });
    return createVNode(FieldDatePicker, dateProps, slots);
  }
  if (valueType === "dateQuarterRange") {
    const dateProps = mergeFieldProps(props, {
      picker: "quarter",
      format: "YYYY-[Q]Q"
    });
    return createVNode(FieldRangePicker, dateProps, slots);
  }
  if (valueType === "dateYear") {
    const dateProps = mergeFieldProps(props, {
      picker: "year",
      format: "YYYY"
    });
    return createVNode(FieldDatePicker, dateProps, slots);
  }
  if (valueType === "dateYearRange") {
    const dateProps = mergeFieldProps(props, {
      picker: "year",
      format: "YYYY"
    });
    return createVNode(FieldRangePicker, dateProps, slots);
  }
  if (valueType === "dateTime") {
    const dateProps = mergeFieldProps(props, {
      picker: "date",
      format: "YYYY-MM-DD HH:mm:ss",
      showTime: true
    });
    return createVNode(FieldDatePicker, dateProps, slots);
  }
  if (valueType === "dateTimeRange") {
    const dateProps = mergeFieldProps(props, {
      picker: "date",
      format: "YYYY-MM-DD HH:mm:ss",
      showTime: true
    });
    return createVNode(FieldRangePicker, dateProps, slots);
  }
  if (valueType === "time") {
    const dateProps = mergeFieldProps(props, {
      format: "HH:mm:ss"
    });
    return createVNode(FieldTimePicker, dateProps, slots);
  }
  if (valueType === "timeRange") {
    const dateProps = mergeFieldProps(props, {
      format: "HH:mm:ss"
    });
    return createVNode(FieldTimeRangePicker, dateProps, slots);
  }
  if (valueType === "select") {
    return createVNode(FieldSelect, props, slots);
  }
  if (valueType === "treeSelect") {
    return createVNode(FieldTreeSelect, props, slots);
  }
  if (valueType === "cascader") {
    return createVNode(FieldCascader, props, slots);
  }
  if (valueType === "radio") {
    return createVNode(FieldRadio, props, slots);
  }
  if (valueType === "checkbox") {
    return createVNode(FieldCheckbox, props, slots);
  }
  if (valueType === "switch") {
    return createVNode(FieldSwitch, props, slots);
  }
  if (valueType === "slider") {
    return createVNode(FieldSlider, props, slots);
  }
  if (valueType === "number") {
    return createVNode(FieldNumber, props, slots);
  }
  if (valueType === "textarea") {
    return createVNode(FieldTextArea, props, slots);
  }
  if (valueType === "password") {
    return createVNode(FieldPassword, props, slots);
  }
  return createVNode(FieldText, props, slots);
}
const BaseField = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    ...baseFieldProps
  },
  setup(props, {
    slots,
    attrs
  }) {
    const {
      valueTypeMap
    } = useCustomFields();
    function onUpdateValue(value) {
      const {
        fieldProps
      } = props;
      if (isFunction(fieldProps["onUpdate:value"])) {
        fieldProps["onUpdate:value"](value);
      }
    }
    return () => {
      const {
        mode,
        text,
        valueType,
        fieldProps,
        formItemProps
      } = props;
      const placeholder = fieldProps.placeholder || props.placeholder;
      const {
        model = {},
        name: namePath
      } = formItemProps;
      const inputValue = get(model, namePath, void 0);
      const dataValue = mode === "edit" ? inputValue ?? text ?? "" : text ?? inputValue ?? "";
      const needFieldProps = {
        ...fieldProps,
        value: inputValue,
        placeholder,
        "onUpdate:value": onUpdateValue
      };
      const fieldRenderProps = {
        ...props,
        ...attrs,
        text: dataValue,
        fieldProps: needFieldProps
      };
      const types = unref(valueTypeMap);
      const customRenderText = isObject(types) && types[valueType];
      if (customRenderText && isFunction(customRenderText)) {
        return customRenderText({
          props: fieldRenderProps,
          slots
        });
      }
      return defaultRenderText(valueType, fieldRenderProps, slots);
    };
  }
});
function tryOnScopeDispose(stop) {
  const scope = getCurrentScope();
  scope && onScopeDispose(stop);
  return scope;
}
function useFetchData$1(request, props, options) {
  const { manualRequest, onLoad, onRequestError } = options || {};
  const context = shallowReactive({
    loading: false,
    dataSource: props.dataSource || {}
  });
  !manualRequest && fetchData();
  async function fetchData() {
    if (!isFunction(request) || context.loading)
      return;
    context.loading = true;
    try {
      const { success, data } = await request(props.params);
      if (success !== false) {
        context.dataSource = data || {};
        onLoad && onLoad(data);
      }
    } catch (err) {
      if (!onRequestError)
        throw new Error(err);
      onRequestError && onRequestError(err);
    } finally {
      context.loading = false;
    }
  }
  const stopWatchDataSource = watch(() => props.dataSource, (value) => {
    context.dataSource = value || {};
  }, { immediate: true });
  function onReload() {
    fetchData();
  }
  function onStop() {
    stopWatchDataSource && stopWatchDataSource();
  }
  tryOnScopeDispose(onStop);
  return { context, onReload };
}
const descriptions = "_descriptions_ged24_5";
const styles$a = {
  "popup-container": "_popup-container_ged24_1",
  descriptions,
  "descriptions-header": "_descriptions-header_ged24_9",
  "descriptions-title": "_descriptions-title_ged24_14",
  "descriptions-extra": "_descriptions-extra_ged24_24"
};
function _isSlot$a(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const cx$c = classNames.bind(styles$a);
const FIELD_MODE = "read";
const extraProps$2 = {
  dataSource: {
    type: Object,
    default: () => ({})
  },
  columns: {
    type: Array,
    default: () => []
  },
  emptyText: {
    type: String,
    default: "-"
  }
};
const Descriptions = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    ...Descriptions$1.props,
    ...extraProps$2,
    request: {
      type: Function,
      default: void 0
    },
    params: {
      type: Object,
      default: () => ({})
    },
    onLoad: {
      type: Function,
      default: void 0
    },
    onRequestError: {
      type: Function,
      default: void 0
    }
  },
  emits: ["load", "requestError"],
  setup(props, {
    attrs,
    emit,
    slots,
    expose
  }) {
    const popupContainer = ref(null);
    const {
      context: requestProps,
      onReload
    } = useFetchData$1(props.request, props, {
      manualRequest: !props.request,
      onLoad: (dataSource) => emit("load", dataSource),
      onRequestError: (err) => emit("requestError", err)
    });
    function schemaToDescsItem(columns, emptyText) {
      return columns.map((item, index2) => {
        const {
          fieldProps,
          formItemProps,
          __SLOTS__: itemSlots
        } = item;
        const {
          valueType,
          dataIndex,
          name,
          label
        } = item;
        const namePath = dataIndex || name || item.key;
        const title = isFunction(item.title) ? item.title() : item.title || label;
        const descsItemProps = {
          ...pick(item, Object.keys(Descriptions$1.Item.props)),
          key: item.key || label || index2,
          label: title
        };
        const needItemSlots = pick(itemSlots, ["label"]);
        if (!valueType && !namePath) {
          const children = itemSlots.default && itemSlots.default(requestProps.dataSource);
          return createVNode(Descriptions$1.Item, descsItemProps, {
            default: () => [children ?? emptyText],
            ...needItemSlots
          });
        }
        const needFormItemProps = {
          ...pick(item, Object.keys(Form$1.Item.props)),
          ...formItemProps,
          name: namePath,
          model: requestProps.dataSource
        };
        const needFieldProps = {
          ...pick(item, Object.keys(BaseField.props)),
          mode: FIELD_MODE,
          emptyText,
          fieldProps,
          formItemProps: needFormItemProps
        };
        const fieldSlots = omit(itemSlots, ["label"]);
        return createVNode(Descriptions$1.Item, descsItemProps, {
          default: () => [createVNode(BaseField, needFieldProps, fieldSlots)],
          ...needItemSlots
        });
      });
    }
    function getColumns(children, columns) {
      const childrenColumns = children.map((item) => {
        const slots2 = omit(item.children || {}, ["_ctx"]);
        return {
          ...item.props,
          __SLOTS__: slots2
        };
      });
      return [...columns, ...childrenColumns].filter((item) => !item.hide && !item.hideInDescriptions).sort((a, b) => (a.order || 0) - (b.order || 0));
    }
    function getPopupContainer() {
      const plain = unref(popupContainer);
      return plain ? plain.$el || plain : plain;
    }
    expose({
      reload: onReload
    });
    return () => {
      const {
        columns,
        emptyText
      } = props;
      const nodes = filterEmptyElement(slots.default ? slots.default() : []);
      const schemaColumns = getColumns(nodes, columns);
      const children = schemaToDescsItem(schemaColumns, emptyText);
      const slotScope = {
        loading: requestProps.loading,
        data: requestProps.dataSource
      };
      const titleDom = getPropsSlot(slots, props, "title", slotScope);
      const extraDom = getPropsSlot(slots, props, "extra", slotScope);
      const restProps = omit(props, ["title", "extra"]);
      const needDescsProps = {
        ...pick(restProps, Object.keys(Descriptions$1.props)),
        ...attrs
      };
      return createVNode("div", {
        "class": cx$c("descriptions")
      }, [createVNode(ConfigProvider, {
        "getPopupContainer": getPopupContainer
      }, {
        default: () => [createVNode("div", {
          "class": cx$c("popup-container"),
          "ref": popupContainer
        }, [(titleDom || extraDom) && createVNode("div", {
          "class": cx$c("descriptions-header")
        }, [createVNode("div", {
          "class": cx$c("descriptions-title")
        }, [titleDom]), createVNode("div", {
          "class": cx$c("descriptions-extra")
        }, [createVNode(Space, {
          "size": 8
        }, _isSlot$a(extraDom) ? extraDom : {
          default: () => [extraDom]
        })])]), createVNode(Spin, {
          "spinning": requestProps.loading
        }, {
          default: () => [createVNode(Descriptions$1, needDescsProps, _isSlot$a(children) ? children : {
            default: () => [children]
          })]
        })])]
      })]);
    };
  }
});
const Item$1 = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  name: "DescriptionsItem",
  props: {
    ...BaseField.props,
    ...Form$1.Item.props,
    ...Descriptions$1.Item.props,
    hide: {
      type: Boolean,
      default: false
    },
    order: {
      type: Number,
      default: void 0
    }
  },
  setup(_, {
    slots
  }) {
    return () => {
      return slots.default && slots.default();
    };
  }
});
Descriptions.Item = Item$1;
const extraProps$1 = {
  title: {
    type: Function,
    default: void 0
  },
  columns: {
    type: Array,
    default: () => []
  },
  rowSelection: {
    type: [Object, Boolean],
    default: false
  },
  scroll: {
    type: Object,
    default: () => ({ x: "max-content" })
  },
  emptyText: {
    type: String,
    default: "-"
  }
};
const tableProps = {
  ...Table$1.props,
  ...extraProps$1,
  search: {
    type: [Object, Boolean],
    default: void 0
  },
  manualRequest: {
    type: Boolean,
    default: false
  },
  request: {
    type: Function,
    default: void 0
  },
  params: {
    type: Object,
    default: void 0
  },
  beforeSearchSubmit: {
    type: Function,
    default: void 0
  },
  postData: {
    type: Function,
    default: void 0
  },
  toolbar: {
    type: Boolean,
    default: true
  },
  options: {
    type: [Object, Boolean],
    default: void 0
  },
  actions: {
    type: Function,
    default: void 0
  },
  settings: {
    type: Function,
    default: void 0
  },
  extra: {
    type: Function,
    default: void 0
  },
  alert: {
    type: Function,
    default: void 0
  },
  alertOptions: {
    type: Function,
    default: void 0
  },
  onChange: {
    type: Function,
    default: void 0
  },
  onPaginateChange: {
    type: Function,
    default: void 0
  },
  onFilterChange: {
    type: Function,
    default: void 0
  },
  onSortChange: {
    type: Function,
    default: void 0
  },
  onLoadingChange: {
    type: Function,
    default: void 0
  },
  onExport: {
    type: Function,
    default: void 0
  },
  onSizeChange: {
    type: Function,
    default: void 0
  },
  onColumnsChange: {
    type: Function,
    default: void 0
  },
  onLoad: {
    type: Function,
    default: void 0
  },
  onRequestError: {
    type: Function,
    default: void 0
  },
  onFinish: {
    type: Function,
    default: void 0
  },
  onReset: {
    type: Function,
    default: void 0
  }
};
function _isSlot$9(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const RowWrap = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    ...Row.props,
    grid: {
      type: Boolean,
      default: false
    }
  },
  setup(props, {
    slots
  }) {
    return () => {
      const {
        grid,
        ...restProps
      } = props;
      const children = slots.default && slots.default();
      if (!grid)
        return createVNode(Fragment, null, [children]);
      return createVNode(Row, restProps, _isSlot$9(children) ? children : {
        default: () => [children]
      });
    };
  }
});
const BaseKey$1 = Symbol("BaseForm");
function createFromInstance(instance) {
  provide(BaseKey$1, instance);
}
function useFormInstance() {
  return inject(BaseKey$1, {});
}
const styles$9 = {
  "form-wrap": "_form-wrap_ygcln_1"
};
const cx$b = classNames.bind(styles$9);
const baseFormProps = {
  ...Form$1.props,
  initialValues: {
    type: Object,
    default: () => ({})
  },
  submitOnReset: {
    type: Boolean,
    default: false
  },
  grid: {
    type: Boolean,
    default: false
  },
  rowProps: {
    type: Object,
    default: () => ({
      gutter: [32, 0]
    })
  },
  transform: {
    type: Function,
    default: void 0
  },
  onSubmit: {
    type: Function,
    default: void 0
  },
  onFinish: {
    type: Function,
    default: void 0
  },
  onFinishFailed: {
    type: Function,
    default: void 0
  },
  onReset: {
    type: Function,
    default: void 0
  },
  onValuesChange: {
    type: Function,
    default: void 0
  }
};
function resetLayoutOfGrid(props) {
  const {
    layout,
    grid
  } = props || {};
  return grid && layout === "inline" ? "vertical" : layout;
}
const BaseForm = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: baseFormProps,
  emits: ["submit", "finish", "finishFailed", "reset", "valuesChange"],
  setup(props, {
    emit,
    slots,
    attrs,
    expose
  }) {
    const popupContainer = ref(null);
    const formInstanceRef = ref(null);
    const defaultValues = cloneProxyToRaw(props.initialValues);
    const model = ref(props.model || defaultValues);
    const formProps = computed(() => {
      const layout = resetLayoutOfGrid(props);
      return {
        ...attrs,
        ...props,
        layout
      };
    });
    watch(model, (curr) => {
      emit("valuesChange", curr);
    }, {
      immediate: true,
      deep: true
    });
    function setModelValue(namePath, value) {
      return set(model.value, namePath, value);
    }
    function getModelValue(namePath) {
      return get(model.value, namePath, void 0);
    }
    function updateModelValue(namePath, updater) {
      return update(model.value, namePath, updater);
    }
    function deleteModelValue(namePath) {
      return unset(model.value, namePath);
    }
    async function validate(names) {
      const context = unref(formInstanceRef);
      if (context && context.validate) {
        return context.validate(names);
      }
      const error = new Error("Error: context is not defined");
      return Promise.reject(error);
    }
    function onFinish(values) {
      const nextValues = cloneProxyToRaw(values);
      if (props.transform && isFunction(props.transform)) {
        const resultValues = props.transform(nextValues) || {};
        emit("finish", resultValues);
      } else {
        emit("finish", nextValues);
      }
    }
    function onScrollToField(namePath, options) {
      const context = unref(formInstanceRef);
      context && context.scrollToField(namePath, options);
    }
    function onFinishFailed(error) {
      const {
        scrollToFirstError
      } = props;
      if (scrollToFirstError && error.errorFields.length) {
        const headField = head(error.errorFields);
        const options = isObject(scrollToFirstError) ? scrollToFirstError : {};
        onScrollToField(headField.name, options);
      }
      emit("finishFailed", error);
    }
    function submit() {
      emit("submit", {
        __MARK__: "submit"
      });
      validate().then((values) => {
        onFinish(values);
      }, (error) => {
        console.warn("Validate Failed:", error);
        onFinishFailed(error);
      });
    }
    function resetFields(names) {
      const context = unref(formInstanceRef);
      context && context.resetFields(names);
      emit("reset", unref(model));
      props.submitOnReset && submit();
    }
    function getPopupContainer() {
      const plain = unref(popupContainer);
      return plain ? plain.$el || plain : plain;
    }
    const fromInstance = {
      formInstanceRef,
      model,
      formProps,
      setModelValue,
      getModelValue,
      updateModelValue,
      deleteModelValue,
      submit,
      validate,
      resetFields
    };
    createFromInstance(fromInstance);
    expose(fromInstance);
    return () => {
      const {
        grid,
        rowProps
      } = props;
      const formProps2 = {
        ...attrs,
        ...pick(props, Object.keys(Form$1.props)),
        layout: resetLayoutOfGrid(props),
        model: unref(model),
        onFinish
      };
      const rowWrapProps = {
        ...rowProps,
        grid
      };
      return createVNode(ConfigProvider, {
        "getPopupContainer": getPopupContainer
      }, {
        default: () => [createVNode("div", {
          "class": cx$b("form-wrap"),
          "ref": popupContainer
        }, [createVNode(Form$1, mergeProps(formProps2, {
          "ref": formInstanceRef
        }), {
          default: () => [createVNode(RowWrap, rowWrapProps, slots)]
        })])]
      });
    };
  }
});
const submitterProps = {
  loading: {
    type: Boolean,
    default: false
  },
  space: {
    type: Number,
    default: 8
  },
  submitText: {
    type: String,
    default: void 0
  },
  resetText: {
    type: String,
    default: void 0
  },
  submitButtonProps: {
    type: [Object, Boolean],
    default: void 0
  },
  resetButtonProps: {
    type: [Object, Boolean],
    default: void 0
  },
  onSubmit: {
    type: Function,
    default: void 0
  },
  onReset: {
    type: Function,
    default: void 0
  },
  onKeyPress: {
    type: Function,
    default: void 0
  }
};
const Submitter = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: submitterProps,
  emits: ["submit", "reset", "keyPress"],
  setup(props, {
    emit
  }) {
    const {
      t
    } = useLocaleReceiver(["Form"]);
    function onReset(evt) {
      preventDefault(evt);
      emit("reset", evt);
    }
    function onKeyPress(evt) {
      emit("keyPress", evt);
    }
    function onSubmit(evt) {
      preventDefault(evt);
      emit("submit", evt);
    }
    return () => {
      const {
        loading: loading2,
        space,
        submitText,
        resetText,
        submitButtonProps,
        resetButtonProps
      } = props;
      const needSubmitButtonProps = {
        ...submitButtonProps,
        type: "primary",
        loading: loading2,
        onClick: onSubmit,
        onKeyPress
      };
      const resetButtonDom = resetButtonProps !== false && createVNode(Button, mergeProps(resetButtonProps, {
        "onClick": onReset
      }), {
        default: () => [resetText || t("reset")]
      });
      const submitButtonDom = submitButtonProps !== false && createVNode(Button, mergeProps(needSubmitButtonProps, {
        "html-type": "submit"
      }), {
        default: () => [submitText || t("submit")]
      });
      return createVNode(Space, {
        "size": space
      }, {
        default: () => [[resetButtonDom, submitButtonDom]]
      });
    };
  }
});
const Form = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    ...BaseForm.props,
    layout: {
      type: String,
      default: "vertical"
    }
  },
  setup(props, {
    slots,
    attrs,
    expose
  }) {
    const baseFormRef = ref(null);
    function getFormInstance() {
      return unref(baseFormRef);
    }
    expose({
      getFormInstance
    });
    return () => {
      const baseFormProps2 = {
        ...attrs,
        ...props
      };
      return createVNode(BaseForm, mergeProps(baseFormProps2, {
        "ref": baseFormRef
      }), slots);
    };
  }
});
function _isSlot$8(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const ColWrap = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    ...Col.props,
    grid: {
      type: Boolean,
      default: false
    }
  },
  setup(props, {
    slots
  }) {
    return () => {
      const {
        grid,
        ...restProps
      } = props;
      const children = slots.default && slots.default();
      const originProps = clone(restProps);
      if (isUndefined(originProps.span) && isUndefined(originProps.xs)) {
        originProps.xs = 24;
      }
      if (!grid)
        return createVNode(Fragment, null, [children]);
      return createVNode(Col, originProps, _isSlot$8(children) ? children : {
        default: () => [children]
      });
    };
  }
});
const Item = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    ...Form$1.Item.props,
    colProps: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, {
    slots,
    attrs
  }) {
    const {
      formProps = {}
    } = useFormInstance();
    return () => {
      const {
        grid
      } = unref(formProps);
      const {
        colProps,
        ...restProps
      } = props;
      const colWrapProps = {
        ...colProps,
        grid: !!grid
      };
      const formItemProps = {
        ...attrs,
        ...restProps
      };
      return createVNode(ColWrap, colWrapProps, {
        default: () => [createVNode(Form$1.Item, formItemProps, slots)]
      });
    };
  }
});
const List = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: void 0
    }
  },
  setup() {
    return () => {
      return createVNode("div", null, null);
    };
  }
});
const Dependency = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    name: {
      type: Array,
      default: () => []
    },
    colProps: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, {
    slots
  }) {
    const {
      formProps = {},
      getModelValue
    } = useFormInstance();
    return () => {
      const {
        grid
      } = unref(formProps);
      const {
        name: namePathList,
        colProps
      } = props;
      const slotScope = transform(namePathList, (result2, namePath) => {
        if (namePath && getModelValue && isFunction(getModelValue)) {
          const value = getModelValue(namePath);
          return set(result2, namePath, cloneProxyToRaw(value));
        }
        return result2;
      }, {});
      const colWrapProps = {
        ...colProps,
        grid: !!grid
      };
      return createVNode(ColWrap, colWrapProps, {
        default: () => [slots.default && slots.default(slotScope)]
      });
    };
  }
});
function genTitleStyle(layout) {
  if (layout === "inline") {
    return {
      paddingBlock: "8px",
      fontWeight: "bold"
    };
  }
  return {
    paddingBottom: "12px",
    fontWeight: "bold"
  };
}
const Group$1 = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    title: {
      type: [String, Function],
      default: void 0
    }
  },
  setup(props, {
    slots
  }) {
    const {
      formProps = {}
    } = useFormInstance();
    return () => {
      const {
        layout = "vertical",
        grid,
        rowProps = {}
      } = unref(formProps);
      const titleDom = getPropsSlot(slots, props, "title");
      const titleStyle = genTitleStyle(layout);
      const colWrapProps = {
        span: 24,
        grid: !!grid
      };
      const rowWrapProps = {
        ...rowProps,
        grid: !!grid
      };
      return createVNode(ColWrap, colWrapProps, {
        default: () => [createVNode(RowWrap, rowWrapProps, {
          default: () => [titleDom && createVNode(Col, {
            "span": 24
          }, {
            default: () => [createVNode("div", {
              "style": titleStyle
            }, [titleDom])]
          }), slots.default && slots.default()]
        })]
      });
    };
  }
});
Form.useForm = Form$1.useForm;
Form.Item = Item;
Form.Group = Group$1;
Form.List = List;
Form.Dependency = Dependency;
const useForm = Form$1.useForm;
function useResizeObserver(target, callback, options) {
  let observer = void 0;
  function cleanup() {
    observer && observer.disconnect();
    observer = void 0;
  }
  const elTarget = computed(() => {
    const plain = unref(target);
    return plain ? plain.$el || plain : plain;
  });
  const stopWatch = watch(elTarget, (el) => {
    cleanup();
    if (window && "ResizeObserver" in window) {
      observer = new ResizeObserver(callback);
      el && observer.observe(el, options);
    }
  }, { immediate: true, flush: "post", deep: true });
  function onStop() {
    cleanup();
    stopWatch && stopWatch();
  }
  tryOnScopeDispose(onStop);
  return { onStop };
}
const ResizeObserver$1 = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    debounce: {
      type: Number,
      default: 100
    },
    onResize: {
      type: Function,
      default: void 0
    }
  },
  emits: ["resize"],
  setup(props, {
    emit,
    slots
  }) {
    const elRef = ref(null);
    const size = ref({
      width: 0,
      height: 0
    });
    function setSize(value) {
      size.value = value;
      emit("resize", value);
    }
    const debounceCallback = debounce((entries) => {
      const entry = head(entries);
      const {
        width,
        height,
        ...restRect
      } = entry.contentRect;
      setSize({
        width,
        height,
        ...restRect
      });
    }, props.debounce, {
      leading: true
    });
    useResizeObserver(elRef, debounceCallback);
    return () => {
      const slotScope = {
        size: unref(size)
      };
      const children = slots.default && slots.default(slotScope);
      return createVNode("div", {
        "ref": elRef
      }, [children]);
    };
  }
});
const styles$8 = {
  "collapse-button": "_collapse-button_1rqak_1"
};
const cx$a = classNames.bind(styles$8);
const Actions = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    collapsed: {
      type: Boolean,
      default: true
    },
    showCollapse: {
      type: Boolean,
      default: false
    },
    submitter: {
      type: Object,
      default: () => ({})
    },
    onSubmit: {
      type: Function,
      default: void 0
    },
    onReset: {
      type: Function,
      default: void 0
    },
    onCollapse: {
      type: Function,
      default: void 0
    }
  },
  emits: ["submit", "reset", "collapse"],
  setup(props, {
    emit,
    attrs
  }) {
    const {
      t
    } = useLocaleReceiver(["Form"]);
    function onCollapse() {
      emit("collapse", !props.collapsed);
    }
    return () => {
      const {
        collapsed,
        showCollapse,
        submitter
      } = props;
      const collapseDom = showCollapse && createVNode(Button, {
        "class": cx$a("collapse-button"),
        "type": "link",
        "onClick": onCollapse
      }, {
        default: () => [createVNode("span", null, [!collapsed ? t("expand") : t("collapsed")]), collapsed ? createVNode(DownOutlined, null, null) : createVNode(UpOutlined, null, null)]
      });
      const submitterProps2 = {
        ...pick(props, Object.keys(Submitter.props)),
        ...pick(submitter, Object.keys(Submitter.props)),
        submitText: submitter.submitText || t("search")
      };
      return createVNode(Space, mergeProps({
        "size": 10
      }, attrs), {
        default: () => [createVNode(Submitter, submitterProps2, null), collapseDom]
      });
    };
  }
});
const breakpoints = {
  horizontal: [
    [556, 24, "vertical"],
    [834, 12, "horizontal"],
    [1112, 8, "horizontal"],
    [Infinity, 6, "horizontal"]
  ],
  vertical: [
    [556, 24, "vertical"],
    [834, 12, "vertical"],
    [1112, 8, "vertical"],
    [Infinity, 6, "vertical"]
  ]
};
function getSpanConfig(layout, width) {
  const spanConfig = breakpoints[layout || "horizontal"];
  const breakPoint = spanConfig.find((item) => width < item[0]);
  return { span: breakPoint[1], layout: breakPoint[2] };
}
function getOffset(length, span) {
  const cols = 24 / span;
  return (cols - 1 - length % cols) * span;
}
function useQueryFilter(size, props) {
  const { span: propsSpan, showCollapse } = props;
  const layout = ref("horizontal");
  const span = ref(24);
  const collapsed = ref(props.collapsed);
  const showNumber = computed(() => {
    const cols = 24 / unref(span) * props.defaultRowsNumber;
    return Math.max(1, cols - 1);
  });
  const stopWatchSize = watch(size, ({ width }) => {
    const spanSize = getSpanConfig(props.layout, width);
    layout.value = spanSize.layout;
    span.value = propsSpan || spanSize.span;
  });
  const stopWatchCollapsed = watch(() => props.collapsed, (value) => {
    collapsed.value = value;
  }, { immediate: true });
  function setCollapse(value) {
    collapsed.value = value;
  }
  function genColNodes(children, callback) {
    const nodes = filterEmptyElement(children).map((child, index2) => {
      const propsHidden = child.props && child.props.hidden || false;
      const colHidden = propsHidden || unref(collapsed) && index2 > unref(showNumber) - 1;
      const hidden = showCollapse ? colHidden : propsHidden;
      const key = isValidElement(child) && child.key || index2;
      return { key, child, hidden };
    });
    const { length } = nodes.filter((c) => !c.hidden);
    const offset = getOffset(length, unref(span));
    const haveRow = unref(span) + offset === 24;
    return { nodes: map(nodes, callback), offset, haveRow };
  }
  function onStop() {
    stopWatchSize && stopWatchSize();
    stopWatchCollapsed && stopWatchCollapsed();
  }
  tryOnScopeDispose(onStop);
  return { layout, span, collapsed, setCollapse, genColNodes };
}
const sizeEnum = {
  xs: 104,
  sm: 216,
  md: 328,
  lg: 440,
  xl: 552
};
function toPx(value) {
  if (value && isNumber(value)) {
    return `${value}px`;
  }
  return void 0;
}
function fieldStyle(style, fieldWidth) {
  const { maxWidth, minWidth, width, ...restStyle } = style || {};
  const fieldSize = isNumber(fieldWidth) ? toPx(fieldWidth) : toPx(sizeEnum[fieldWidth]);
  return {
    ...restStyle,
    maxWidth: maxWidth || "100%",
    minWidth: minWidth || toPx(sizeEnum["xs"]),
    width: width || fieldSize || "100%"
  };
}
function genFormItemFixStyle(labelWidth, layout) {
  if (labelWidth && layout !== "vertical" && labelWidth !== "auto") {
    return {
      labelCol: {
        flex: `0 0 ${labelWidth}px`
      },
      wrapperCol: {
        style: {
          maxWidth: `calc(100% - ${labelWidth}px)`
        }
      },
      style: {
        flexWrap: "nowrap"
      }
    };
  }
  return void 0;
}
function namePathToString(namePath) {
  if (namePath && isArray(namePath)) {
    const pathString = reduce(namePath, (total, value, index2) => {
      const result2 = isNumber(value) && index2 > 0 ? `[${value}]` : `.${value}`;
      return total + result2;
    }, "");
    return pathString.replace(/^\./, "");
  }
  return toString(namePath);
}
const styles$7 = {
  "query-filter": "_query-filter_15dew_1",
  "form-item__vertical": "_form-item__vertical_15dew_8",
  "action-col": "_action-col_15dew_11",
  "col-hidden": "_col-hidden_15dew_14"
};
function _isSlot$7(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const cx$9 = classNames.bind(styles$7);
const queryFilterProps = {
  ...BaseForm.props,
  ...Actions.props,
  span: {
    type: Number,
    default: void 0
  },
  gutter: {
    type: [Number, String],
    default: 24
  },
  labelWidth: {
    type: [Number, String],
    default: 80
    // 'auto'
  },
  defaultRowsNumber: {
    type: Number,
    default: 1
  },
  onResize: {
    type: Function,
    default: void 0
  },
  onCollapse: {
    type: Function,
    default: void 0
  }
};
const QueryFilter = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: queryFilterProps,
  emits: ["resize", "collapse"],
  setup(props, {
    slots,
    emit,
    attrs,
    expose
  }) {
    const baseFormRef = ref(null);
    const size = ref({
      width: 0,
      height: 0
    });
    const {
      layout,
      span,
      collapsed,
      setCollapse,
      genColNodes
    } = useQueryFilter(size, props);
    function onResize(value) {
      size.value = value;
      emit("resize", value);
    }
    function onSubmit() {
      const context = unref(baseFormRef);
      context && context.submit();
    }
    function onReset() {
      const context = unref(baseFormRef);
      context && context.resetFields();
    }
    function onCollapse(value) {
      setCollapse && setCollapse(value);
      emit("collapse", value);
    }
    function getFormInstance() {
      return unref(baseFormRef);
    }
    expose({
      getFormInstance
    });
    return () => {
      const {
        labelWidth,
        gutter
      } = props;
      const slotScope = {
        layout: unref(layout),
        props: genFormItemFixStyle(labelWidth, unref(layout))
      };
      const children = filterEmptyElement(slots.default ? slots.default(slotScope) : []);
      const {
        nodes: colNodes,
        offset,
        haveRow
      } = genColNodes(children, (item) => {
        const {
          child,
          hidden,
          key
        } = item;
        const colClass = cx$9({
          "col-hidden": hidden
        });
        return createVNode(Col, {
          "key": key,
          "class": colClass,
          "span": unref(span)
        }, _isSlot$7(child) ? child : {
          default: () => [child]
        });
      });
      const baseFormProps2 = {
        ...attrs,
        ...pick(props, Object.keys(BaseForm.props)),
        layout: unref(layout)
      };
      const actionsProps = {
        ...pick(props, Object.keys(Actions.props)),
        collapsed: unref(collapsed),
        onSubmit,
        onReset,
        onCollapse
      };
      const formItemClass = cx$9({
        "form-item__vertical": unref(layout) === "vertical" && !haveRow
      });
      return createVNode(BaseForm, mergeProps(baseFormProps2, {
        "ref": baseFormRef
      }), {
        default: () => [createVNode(ResizeObserver$1, {
          "onResize": onResize
        }, {
          default: () => [createVNode(Row, {
            "gutter": gutter,
            "class": cx$9("query-filter"),
            "justify": "start"
          }, {
            default: () => [colNodes, createVNode(Col, {
              "key": "action",
              "class": cx$9("action-col"),
              "span": unref(span),
              "offset": offset
            }, {
              default: () => [createVNode(Form$1.Item, {
                "class": formItemClass,
                "colon": false
              }, {
                default: () => [createVNode(Actions, actionsProps, null)]
              })]
            })]
          })]
        })]
      });
    };
  }
});
const extraProps = {
  layout: {
    type: String,
    default: "vertical"
  },
  open: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: void 0
  },
  width: {
    type: Number,
    default: 512
  },
  maskClosable: {
    type: Boolean,
    default: true
  },
  destroyOnClose: {
    type: Boolean,
    default: true
  }
};
const floatProps = {
  ...BaseForm.props,
  ...extraProps,
  extraProps: {
    type: Object,
    default: () => ({})
  },
  submitter: {
    type: Object,
    default: () => ({})
  },
  trigger: {
    type: Function,
    default: void 0
  },
  onOpen: {
    type: Function,
    default: void 0
  },
  onCancel: {
    type: Function,
    default: void 0
  },
  onAfterClose: {
    type: Function,
    default: void 0
  },
  onOpenChange: {
    type: Function,
    default: void 0
  },
  onLoadingChange: {
    type: Function,
    default: void 0
  }
};
function useFloatForm(props, options) {
  const sOpen = ref(props.open);
  const loading2 = ref(false);
  const stopWatchOpen = watch(() => props.open, (value) => {
    sOpen.value = value;
  }, { immediate: true });
  function setOpenValue(value) {
    sOpen.value = value;
    options.onUpdateOpen && options.onUpdateOpen(value);
  }
  function onOpen() {
    setOpenValue(true);
    options.onOpen && options.onOpen();
    isFunction(props.extraProps.onOpen) && props.extraProps.onOpen();
  }
  function onCancel() {
    if (unref(loading2))
      return;
    setOpenValue(false);
    options.onCancel && options.onCancel();
    isFunction(props.extraProps.onCancel) && props.extraProps.onCancel();
  }
  async function onFinish(values) {
    if (!isFunction(props.onFinish) || unref(loading2))
      return;
    loading2.value = true;
    try {
      const result2 = await props.onFinish(values);
      loading2.value = false;
      result2 && onCancel();
    } catch (err) {
      loading2.value = false;
      console.warn(err);
    }
  }
  function onStop() {
    stopWatchOpen && stopWatchOpen();
  }
  tryOnScopeDispose(onStop);
  return { sOpen, loading: loading2, onOpen, onCancel, onFinish };
}
const index$2 = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: floatProps,
  emits: ["update:open", "open", "cancel", "afterClose", "openChange", "loadingChange"],
  setup(props, {
    emit,
    slots,
    attrs,
    expose
  }) {
    const baseFormRef = ref(null);
    const {
      t
    } = useLocaleReceiver(["Form"]);
    const {
      sOpen,
      loading: loading2,
      onOpen,
      onCancel,
      onFinish
    } = useFloatForm(props, {
      onOpen: () => emit("open"),
      onCancel: () => emit("cancel"),
      onUpdateOpen: (value) => emit("update:open", value)
    });
    watch(sOpen, (value) => {
      emit("openChange", value);
    });
    watch(loading2, (value) => {
      emit("loadingChange", value);
    });
    function onAfterClose() {
      const {
        extraProps: extraProps2
      } = props;
      const modalProps = {
        ...pick(props, Object.keys(Modal.props)),
        ...extraProps2
      };
      if (modalProps.destroyOnClose) {
        const context = unref(baseFormRef);
        context && context.resetFields();
      }
      if (extraProps2.onAfterClose && isFunction(extraProps2.onAfterClose)) {
        extraProps2.onAfterClose();
      }
      emit("afterClose");
    }
    function onSubmit() {
      const context = unref(baseFormRef);
      context && context.submit();
    }
    function getFormInstance() {
      return unref(baseFormRef);
    }
    expose({
      open: onOpen,
      close: onCancel,
      getFormInstance
    });
    return () => {
      const {
        extraProps: extraProps2,
        submitter
      } = props;
      const baseFormProps2 = {
        ...attrs,
        ...pick(props, Object.keys(BaseForm.props)),
        onFinish
      };
      const baseFormSlots = omit(slots, ["trigger"]);
      const needModalProps = {
        ...pick(props, Object.keys(Modal.props)),
        ...extraProps2,
        open: unref(sOpen),
        onCancel,
        onAfterClose
      };
      const modalSlots = {
        footer: () => {
          const submitterProps2 = {
            ...pick(submitter, Object.keys(Submitter.props)),
            submitText: submitter.submitText || t("okText"),
            resetText: submitter.resetText || t("cancelText"),
            loading: unref(loading2),
            onSubmit,
            onReset: onCancel
          };
          return createVNode(Submitter, submitterProps2, null);
        }
      };
      const triggerDom = getSlotVNode(slots, props, "trigger");
      return createVNode(Fragment, null, [createVNode(Modal, needModalProps, {
        default: () => [createVNode(BaseForm, mergeProps(baseFormProps2, {
          "ref": baseFormRef
        }), baseFormSlots)],
        ...modalSlots
      }), triggerDom && createVNode("div", {
        "style": {
          display: "inline-block"
        },
        "onClick": onOpen
      }, [triggerDom])]);
    };
  }
});
const index$1 = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: floatProps,
  emits: ["update:open", "open", "cancel", "afterClose", "openChange", "loadingChange"],
  setup(props, {
    emit,
    slots,
    attrs,
    expose
  }) {
    const baseFormRef = ref(null);
    const {
      t
    } = useLocaleReceiver(["Form"]);
    const {
      sOpen,
      loading: loading2,
      onOpen,
      onCancel,
      onFinish
    } = useFloatForm(props, {
      onOpen: () => emit("open"),
      onCancel: () => emit("cancel"),
      onUpdateOpen: (value) => emit("update:open", value)
    });
    watch(sOpen, (value) => {
      emit("openChange", value);
    });
    watch(loading2, (value) => {
      emit("loadingChange", value);
    });
    function onAfterClose() {
      const {
        extraProps: extraProps2
      } = props;
      const drawerProps = {
        ...pick(props, Object.keys(Drawer.props)),
        ...extraProps2
      };
      if (drawerProps.destroyOnClose) {
        const context = unref(baseFormRef);
        context && context.resetFields();
      }
      if (extraProps2.onAfterClose && isFunction(extraProps2.onAfterClose)) {
        extraProps2.onAfterClose();
      }
      emit("afterClose");
    }
    function onSubmit() {
      const context = unref(baseFormRef);
      context && context.submit();
    }
    function getFormInstance() {
      return unref(baseFormRef);
    }
    expose({
      open: onOpen,
      close: onCancel,
      getFormInstance
    });
    return () => {
      const {
        extraProps: extraProps2,
        submitter
      } = props;
      const baseFormProps2 = {
        ...attrs,
        ...pick(props, Object.keys(BaseForm.props)),
        onFinish
      };
      const baseFormSlots = omit(slots, ["trigger"]);
      const needDrawerProps = {
        ...pick(props, Object.keys(Drawer.props)),
        ...extraProps2,
        headerStyle: {
          paddingBlock: "14px"
        },
        open: unref(sOpen),
        onClose: onCancel,
        onAfterOpenChange: onAfterClose
      };
      const drawerSlots = {
        extra: () => {
          const submitterProps2 = {
            ...pick(submitter, Object.keys(Submitter.props)),
            submitText: submitter.submitText || t("okText"),
            resetText: submitter.resetText || t("cancelText"),
            loading: unref(loading2),
            onSubmit,
            onReset: onCancel
          };
          return createVNode(Submitter, submitterProps2, null);
        }
      };
      const triggerDom = getSlotVNode(slots, props, "trigger");
      return createVNode(Fragment, null, [createVNode(Drawer, needDrawerProps, {
        default: () => [createVNode(BaseForm, mergeProps(baseFormProps2, {
          "ref": baseFormRef
        }), baseFormSlots)],
        ...drawerSlots
      }), triggerDom && createVNode("div", {
        "style": {
          display: "inline-block"
        },
        "onClick": onOpen
      }, [triggerDom])]);
    };
  }
});
const Field = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    ...BaseField.props,
    width: {
      type: [String, Number],
      default: void 0
    },
    labelWidth: {
      type: [String, Number],
      default: "auto"
    },
    hidden: {
      type: Boolean,
      default: false
    },
    colProps: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, {
    slots: fieldSlots,
    attrs
  }) {
    const {
      model = {},
      formProps = {},
      setModelValue
    } = useFormInstance();
    setDefaultValue(props.formItemProps.name);
    function setDefaultValue(namePath) {
      const hasValue = has(unref(model), namePath);
      !hasValue && onUpdateValue(namePath, void 0);
    }
    function onUpdateValue(namePath, value) {
      if (isString(namePath) || isArray(namePath)) {
        setModelValue && setModelValue(namePath, value);
      }
    }
    return () => {
      const {
        fieldProps,
        formItemProps,
        width: fieldWidth,
        labelWidth,
        hidden,
        colProps
      } = props;
      const {
        layout = "vertical",
        grid
      } = unref(formProps);
      const extraFormItemProps = genFormItemFixStyle(labelWidth, layout);
      const key = namePathToString(formItemProps.name);
      const needFieldProps = {
        ...fieldProps,
        style: fieldStyle(fieldProps.style, fieldWidth),
        "onUpdate:value": onUpdateValue.bind(null, formItemProps.name)
      };
      const needFormItemProps = {
        ...formItemProps,
        ...extraFormItemProps,
        key,
        model: unref(model)
      };
      const baseFieldProps2 = {
        ...attrs,
        ...pick(props, Object.keys(BaseField.props)),
        fieldProps: needFieldProps,
        formItemProps: needFormItemProps
      };
      const colWrapProps = {
        ...colProps,
        hidden,
        grid: !!grid
      };
      return createVNode(ColWrap, mergeProps(colWrapProps, {
        "key": key
      }), {
        default: () => [createVNode(Form$1.Item, needFormItemProps, {
          default: () => [createVNode(BaseField, baseFieldProps2, fieldSlots)]
        })]
      });
    };
  }
});
function HocField(valueType) {
  return /* @__PURE__ */ defineComponent({
    inheritAttrs: false,
    props: {
      ...Field.props,
      ...Form$1.Item.props
    },
    setup(props, {
      slots,
      attrs
    }) {
      return () => {
        const {
          fieldProps,
          formItemProps
        } = props;
        const needFormItemProps = {
          ...pick(props, Object.keys(Form$1.Item.props)),
          ...formItemProps
        };
        const needFieldProps = {
          ...attrs,
          ...props,
          valueType,
          fieldProps,
          formItemProps: needFormItemProps
        };
        return createVNode(Field, needFieldProps, slots);
      };
    }
  });
}
const Date = HocField("date");
const DateRange = HocField("dateRange");
const DateWeek = HocField("dateWeek");
const DateWeekRange = HocField("dateWeekRange");
const DateMonth = HocField("dateMonth");
const DateMonthRange = HocField("dateMonthRange");
const DateQuarter = HocField("dateQuarter");
const DateQuarterRange = HocField("dateQuarterRange");
const DateYear = HocField("dateYear");
const DateYearRange = HocField("dateYearRange");
const DateTime = HocField("dateTime");
const DateTimeRange = HocField("dateTimeRange");
const Time = HocField("time");
const TimeRange = HocField("timeRange");
const Select = HocField("select");
const TreeSelect = HocField("treeSelect");
const Cascader = HocField("cascader");
const Radio = HocField("radio");
const Checkbox = HocField("checkbox");
const Switch = HocField("switch");
const Slider = HocField("slider");
const Number$1 = HocField("number");
const TextArea = HocField("textarea");
const Password = HocField("password");
const Text$1 = HocField("text");
const BaseSearch = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    ...QueryFilter.props,
    manualRequest: {
      type: Boolean,
      default: false
    }
  },
  setup(props, {
    attrs,
    slots
  }) {
    const queryFilterRef = ref(null);
    onMounted(() => {
      !props.manualRequest && onSubmit();
    });
    function onSubmit() {
      const context = unref(queryFilterRef);
      if (context && context.getFormInstance) {
        const formInstance = context.getFormInstance();
        formInstance && formInstance.submit();
      }
    }
    return () => {
      const queryFilterProps2 = {
        ...attrs,
        ...props
      };
      const cardProps = {
        bodyStyle: {
          paddingInline: "24px"
        },
        style: {
          marginBottom: "16px"
        }
      };
      const children = filterEmptyElement(slots.default ? slots.default() : []);
      return createVNode(Card, cardProps, {
        default: () => [createVNode(QueryFilter, mergeProps(queryFilterProps2, {
          "ref": queryFilterRef
        }), {
          default: (slotScope) => {
            return children.map((vNode2) => {
              if (!isValidElement(vNode2))
                return vNode2;
              const {
                fieldProps,
                formItemProps
              } = vNode2.props;
              const extraProps2 = {
                fieldProps: {
                  ...fieldProps,
                  style: {
                    width: "100%"
                  }
                },
                formItemProps: {
                  ...formItemProps,
                  ...slotScope.props
                }
              };
              return cloneVNode(vNode2, extraProps2);
            });
          }
        })]
      });
    };
  }
});
function _isSlot$6(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
function filterSearchColumns(columns) {
  return columns.filter((column) => column.search);
}
const Search = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    ...BaseSearch.props,
    columns: {
      type: Array,
      default: () => []
    }
  },
  setup(props, {
    attrs
  }) {
    const defaultColumns = filterSearchColumns(props.columns);
    const initialValues = transform(defaultColumns, (result2, column) => {
      const namePath = column.key || column.dataIndex;
      if (namePath && !isEmpty(column.initialValue)) {
        return set(result2, namePath, column.initialValue);
      }
      return result2;
    }, {});
    const searchColumns = computed(() => filterSearchColumns(props.columns));
    return () => {
      let _slot;
      const baseSearchProps = {
        ...attrs,
        ...pick(props, Object.keys(BaseSearch.props)),
        initialValues
      };
      return createVNode(BaseSearch, baseSearchProps, _isSlot$6(_slot = unref(searchColumns).map((column) => {
        const {
          fieldProps,
          formItemProps
        } = column;
        const namePath = column.key || column.dataIndex;
        const needFormItemProps = {
          ...formItemProps,
          name: namePath,
          label: column.title
        };
        const needFieldProps = {
          ...pick(column, Object.keys(Field.props)),
          fieldProps: {
            ...fieldProps,
            style: {
              width: "100%"
            }
          },
          formItemProps: needFormItemProps
        };
        const key = namePathToString(namePath);
        return createVNode(Field, mergeProps(needFieldProps, {
          "key": key
        }), null);
      })) ? _slot : {
        default: () => [_slot]
      });
    };
  }
});
const extra = "_extra_1ymdl_1";
const styles$6 = {
  extra
};
const cx$8 = classNames.bind(styles$6);
const Extra = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  setup(props, {
    slots
  }) {
    return () => {
      return createVNode("div", {
        "class": cx$8("extra")
      }, [slots.default && slots.default()]);
    };
  }
});
const BaseKey = Symbol("TableContext");
function createSharedContext(instance) {
  provide(BaseKey, instance);
}
function useSharedContext() {
  return inject(BaseKey, {});
}
function _isSlot$5(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const Density = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  setup() {
    const {
      tableSize,
      setTableSize
    } = useSharedContext();
    const {
      t
    } = useLocaleReceiver(["Table", "toolbar"]);
    function onChangeClick(params) {
      if (unref(tableSize) !== params.key) {
        setTableSize && setTableSize(params.key);
      }
    }
    return () => {
      const dropdownSlots = {
        overlay: () => {
          let _slot, _slot2, _slot3;
          const menuProps = {
            style: {
              width: "88px"
            },
            selectedKeys: [unref(tableSize)],
            onClick: onChangeClick
          };
          return createVNode(Menu, menuProps, {
            default: () => [createVNode(Menu.Item, {
              "key": "large"
            }, _isSlot$5(_slot = t("densityLarger")) ? _slot : {
              default: () => [_slot]
            }), createVNode(Menu.Item, {
              "key": "middle"
            }, _isSlot$5(_slot2 = t("densityMiddle")) ? _slot2 : {
              default: () => [_slot2]
            }), createVNode(Menu.Item, {
              "key": "small"
            }, _isSlot$5(_slot3 = t("densitySmall")) ? _slot3 : {
              default: () => [_slot3]
            })]
          });
        }
      };
      return createVNode(Dropdown, {
        "trigger": "click",
        "placement": "bottomRight"
      }, {
        default: () => [createVNode(Tooltip$1, {
          "title": t("density")
        }, {
          default: () => [createVNode(Button, null, {
            default: () => [createVNode(ColumnHeightOutlined, null, null)]
          })]
        })],
        ...dropdownSlots
      });
    };
  }
});
const Tooltip = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    columnKey: {
      type: String,
      default: void 0
    },
    title: {
      type: String,
      default: void 0
    },
    fixed: {
      type: String,
      default: void 0
    },
    onChange: {
      type: Function,
      default: void 0
    }
  },
  emits: ["change"],
  setup(props, {
    emit,
    slots
  }) {
    function onClick(evt) {
      preventDefault(evt, true);
      emit("change", props.fixed);
    }
    return () => {
      const {
        title
      } = props;
      return createVNode(Tooltip$1, {
        "title": title
      }, {
        default: () => [createVNode("span", {
          "onClick": onClick
        }, [slots.default && slots.default()])]
      });
    };
  }
});
const styles$5 = {
  "tree-list": "_tree-list_197kf_1",
  "tree-list-title": "_tree-list-title_197kf_1",
  "tree-node": "_tree-node_197kf_7",
  "tree-node-title": "_tree-node-title_197kf_12",
  "tree-node-option": "_tree-node-option_197kf_19"
};
const cx$7 = classNames.bind(styles$5);
const TreeNode = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    columnKey: {
      type: String,
      default: void 0
    },
    title: {
      type: String,
      default: void 0
    },
    fixed: {
      type: String,
      default: void 0
    },
    onChange: {
      type: Function,
      default: void 0
    }
  },
  emits: ["change"],
  setup(props, {
    emit,
    attrs
  }) {
    const {
      t
    } = useLocaleReceiver(["Table", "toolbar"]);
    function onChange(fixed) {
      emit("change", props.columnKey, fixed);
    }
    return () => {
      const {
        title,
        fixed,
        columnKey
      } = props;
      const iconProps = {
        columnKey,
        onChange
      };
      const iconDom = createVNode(Space, {
        "size": 4
      }, {
        default: () => [fixed !== "left" && createVNode(Tooltip, mergeProps({
          "title": t("leftPin"),
          "fixed": "left"
        }, iconProps), {
          default: () => [createVNode(VerticalAlignTopOutlined, null, null)]
        }), !!fixed && createVNode(Tooltip, mergeProps({
          "title": t("noPin")
        }, iconProps), {
          default: () => [createVNode(VerticalAlignMiddleOutlined, null, null)]
        }), fixed !== "right" && createVNode(Tooltip, mergeProps({
          "title": t("rightPin"),
          "fixed": "right"
        }, iconProps), {
          default: () => [createVNode(VerticalAlignBottomOutlined, null, null)]
        })]
      });
      return createVNode("div", {
        "class": cx$7("tree-node")
      }, [createVNode("div", {
        "class": cx$7("tree-node-title")
      }, [title]), createVNode("div", {
        "class": cx$7("tree-node-option")
      }, [!attrs.disabled && iconDom])]);
    };
  }
});
const cx$6 = classNames.bind(styles$5);
const TreeList = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    showTitle: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: void 0
    },
    fixed: {
      type: String,
      default: void 0
    },
    columns: {
      type: Array,
      default: () => []
    },
    checkable: {
      type: Boolean,
      default: true
    },
    draggable: {
      type: Boolean,
      default: true
    },
    onCheckChange: {
      type: Function,
      default: void 0
    },
    onDropChange: {
      type: Function,
      default: void 0
    },
    onFixedChange: {
      type: Function,
      default: void 0
    }
  },
  emits: ["checkChange", "dropChange", "fixedChange"],
  setup(props, {
    emit
  }) {
    function onTreeNodeCheck(_, info) {
      const {
        node,
        checked
      } = info;
      const column = props.columns.find((item) => item.key === node.key);
      emit("checkChange", node.key, {
        ...column,
        checked
      });
    }
    function onTreeNodeDrop(info) {
      const {
        node,
        dragNode,
        dropPosition
      } = info;
      const dragKey = dragNode.key, dropKey = node.key, dropPos = node.pos.split("-");
      const trueDropPosition = dropPosition - Number(dropPos[dropPos.length - 1]);
      emit("dropChange", dragKey, dropKey, trueDropPosition, dropPosition);
    }
    function onChangeFixed(key, fixed) {
      const column = props.columns.find((item) => item.key === key);
      emit("fixedChange", key, {
        ...column,
        fixed
      });
    }
    return () => {
      if (props.columns.length === 0)
        return null;
      const {
        columns,
        showTitle,
        title,
        fixed,
        checkable,
        draggable
      } = props;
      const checkedKeys = columns.filter((item) => {
        return item.checked !== false;
      }).map((item) => {
        return item.key;
      });
      const treeSlots = {
        title: (slotScope) => {
          const checkboxItemProps = {
            ...slotScope,
            fixed,
            columnKey: slotScope.key,
            onChange: onChangeFixed
          };
          return createVNode(TreeNode, checkboxItemProps, null);
        }
      };
      const loopTreeData = columns.map((item) => {
        return {
          key: item.key,
          title: item.title,
          selectable: false,
          disableCheckbox: item.disable === true
        };
      });
      const needTreeProps = {
        height: 280,
        showLine: false,
        blockNode: true,
        checkStrictly: true,
        checkable,
        draggable,
        checkedKeys,
        treeData: loopTreeData,
        onCheck: onTreeNodeCheck,
        onDrop: onTreeNodeDrop
      };
      return createVNode("div", {
        "class": cx$6("tree-list")
      }, [showTitle && createVNode("div", {
        "class": cx$6("tree-list-title")
      }, [title]), createVNode(Tree, needTreeProps, treeSlots)]);
    };
  }
});
const styles$4 = {
  "column-setting-title": "_column-setting-title_5rp1x_1",
  "tree-list-group": "_tree-list-group_5rp1x_8"
};
function _isSlot$4(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const cx$5 = classNames.bind(styles$4);
const ColumnSetting = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    checkable: {
      type: Boolean,
      default: true
    },
    draggable: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const {
      columns = [],
      columnsMap = {},
      setColumnsMap
    } = useSharedContext();
    const {
      t
    } = useLocaleReceiver(["Table", "toolbar"]);
    function onCheckClick(evt) {
      const {
        checked: targetChecked
      } = evt.target;
      const values = map(unref(columnsMap), (column, key) => {
        const checked = column.disable ? column.checked : targetChecked;
        return [key, {
          ...column,
          checked
        }];
      });
      setColumnsMap && setColumnsMap(fromPairs(values));
    }
    function onClearClick() {
      setColumnsMap && setColumnsMap(false);
    }
    function onFixedChange(key, column) {
      const values = {
        ...unref(columnsMap),
        [key]: column
      };
      setColumnsMap && setColumnsMap(values);
    }
    function onCheckChange(key, column) {
      const values = {
        ...unref(columnsMap),
        [key]: column
      };
      setColumnsMap && setColumnsMap(values);
    }
    function onDropChange(dragKey, dropKey, trueDropPosition, dropPosition) {
      const keys = unref(columns).map((column) => column.key);
      const dragIndex = keys.findIndex((key) => key === dragKey);
      const dropIndex = keys.findIndex((key) => key === dropKey);
      const target = keys[dragIndex];
      keys.splice(dragIndex, 1);
      if (trueDropPosition === -1 || dropPosition > dragIndex) {
        keys.splice(dropIndex, 0, target);
      } else {
        keys.splice(dropIndex + 1, 0, target);
      }
      const values = keys.map((key, order) => {
        const column = unref(columnsMap)[key] || {};
        return [key, {
          ...column,
          order
        }];
      });
      setColumnsMap && setColumnsMap(fromPairs(values));
    }
    return () => {
      const {
        checkable,
        draggable
      } = props;
      const popoverSlots = {
        title: () => {
          let _slot, _slot2;
          const unCheckedColumns = unref(columns).filter((item) => item.checked === false);
          const indeterminate = unCheckedColumns.length > 0 && unCheckedColumns.length !== unref(columns).length;
          const checked = unCheckedColumns.length === 0 && unCheckedColumns.length !== unref(columns).length;
          return createVNode("div", {
            "class": cx$5("column-setting-title")
          }, [createVNode(Checkbox$1, {
            "indeterminate": indeterminate,
            "checked": checked,
            "onChange": onCheckClick
          }, _isSlot$4(_slot = t("columnDisplay")) ? _slot : {
            default: () => [_slot]
          }), createVNode(Button, {
            "style": {
              padding: "4px"
            },
            "type": "link",
            "onClick": onClearClick
          }, _isSlot$4(_slot2 = t("reset")) ? _slot2 : {
            default: () => [_slot2]
          })]);
        },
        content: () => {
          const leftList = unref(columns).filter((item) => item.fixed === "left");
          const list = unref(columns).filter((item) => item.fixed === void 0);
          const rightList = unref(columns).filter((item) => item.fixed === "right");
          const showTitle = leftList.length > 0 || rightList.length > 0;
          const treeListProps = {
            checkable,
            draggable,
            onCheckChange,
            onFixedChange,
            onDropChange
          };
          return createVNode("div", {
            "class": cx$5("tree-list-group")
          }, [createVNode(TreeList, mergeProps({
            "fixed": "left",
            "title": t("leftPin"),
            "columns": leftList
          }, treeListProps), null), createVNode(TreeList, mergeProps({
            "title": t("noPin"),
            "showTitle": showTitle,
            "columns": list
          }, treeListProps), null), createVNode(TreeList, mergeProps({
            "fixed": "right",
            "title": t("rightPin"),
            "columns": rightList
          }, treeListProps), null)]);
        }
      };
      return createVNode(Popover, {
        "trigger": "click",
        "placement": "bottomRight"
      }, {
        default: () => [createVNode(Tooltip$1, {
          "title": t("columnSetting")
        }, {
          default: () => [createVNode(Button, null, {
            default: () => [createVNode(SettingOutlined, null, null)]
          })]
        })],
        ...popoverSlots
      });
    };
  }
});
const toolbar = "_toolbar_139xk_14";
const styles$3 = {
  "popup-container": "_popup-container_139xk_1",
  toolbar,
  "toolbar-title": "_toolbar-title_139xk_19",
  "toolbar-actions": "_toolbar-actions_139xk_28"
};
function _isSlot$3(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const cx$4 = classNames.bind(styles$3);
const defaultOptions = {
  reload: true,
  export: false,
  density: true,
  setting: true
};
const Toolbar = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    options: {
      type: [Object, Boolean],
      default: () => ({})
    },
    title: {
      type: Function,
      default: void 0
    },
    actions: {
      type: Function,
      default: void 0
    },
    settings: {
      type: Function,
      default: void 0
    },
    onExport: {
      type: Function,
      default: void 0
    }
  },
  emits: ["export"],
  setup(props, {
    emit,
    slots
  }) {
    const popupContainer = ref(null);
    const {
      t
    } = useLocaleReceiver(["Table", "toolbar"]);
    const {
      requestProps,
      onReload
    } = useSharedContext();
    function onExportClick() {
      emit("export");
    }
    function getPopupContainer() {
      const plain = unref(popupContainer);
      return plain ? plain.$el || plain : plain;
    }
    return () => {
      const {
        options: propsOptions
      } = props;
      const slotScope = {
        loading: requestProps.loading,
        pageData: requestProps.dataSource,
        pagination: requestProps.pagination
      };
      const titleDom = getSlotVNode(slots, props, "title", slotScope);
      const actionsDom = getSlotVNode(slots, props, "actions", slotScope);
      const renderSettings = () => {
        const catalog = {
          reload: createVNode(Tooltip$1, {
            "title": t("reload")
          }, {
            default: () => [createVNode(Button, {
              "onClick": onReload
            }, {
              default: () => [createVNode(ReloadOutlined, {
                "spin": requestProps.loading
              }, null)]
            })]
          }),
          export: createVNode(Tooltip$1, {
            "title": t("export")
          }, {
            default: () => [createVNode(Button, {
              "onClick": onExportClick
            }, {
              default: () => [createVNode(VerticalAlignBottomOutlined, null, null)]
            })]
          }),
          density: createVNode(Density, null, null),
          setting: createVNode(ColumnSetting, null, null)
        };
        const options = pick({
          ...defaultOptions,
          ...propsOptions
        }, Object.keys(defaultOptions));
        const defaultSettings = Object.keys(options).filter((key) => options[key]).map((key) => catalog[key]);
        const customSettings = getSlotVNode(slots, props, "settings", slotScope);
        return createVNode(Space.Compact, {
          "style": {
            marginLeft: "12px"
          }
        }, {
          default: () => [customSettings || defaultSettings]
        });
      };
      return createVNode(ConfigProvider, {
        "getPopupContainer": getPopupContainer
      }, {
        default: () => [createVNode("div", {
          "class": cx$4("popup-container"),
          "ref": popupContainer
        }, [createVNode("div", {
          "class": cx$4("toolbar")
        }, [createVNode("div", {
          "class": cx$4("toolbar-title")
        }, [titleDom]), createVNode("div", {
          "class": cx$4("toolbar-actions")
        }, [createVNode(Space, {
          "size": 8
        }, _isSlot$3(actionsDom) ? actionsDom : {
          default: () => [actionsDom]
        }), propsOptions !== false && renderSettings()])])])]
      });
    };
  }
});
const action = "_action_ggzx2_1";
const action__primary = "_action__primary_ggzx2_10";
const action__warning = "_action__warning_ggzx2_19";
const action__error = "_action__error_ggzx2_28";
const styles$2 = {
  action,
  action__primary,
  action__warning,
  action__error
};
const cx$3 = classNames.bind(styles$2);
const Action = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: "primary"
    },
    onClick: {
      type: Function,
      default: void 0
    }
  },
  emits: ["click"],
  setup(props, {
    emit,
    slots
  }) {
    function onClick(evt) {
      preventDefault(evt);
      emit("click", evt);
    }
    return () => {
      const actionClass = cx$3("action", {
        "action__primary": props.type === "primary",
        "action__warning": props.type === "warning",
        "action__error": props.type === "error"
      });
      return createVNode("a", {
        "class": actionClass,
        "onClick": onClick
      }, [slots.default && slots.default()]);
    };
  }
});
function _isSlot$2(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const cx$2 = classNames.bind(styles$2);
const Group = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    ...Space.props,
    max: {
      type: Number,
      default: 2
    },
    size: {
      type: Number,
      default: 8
    }
  },
  setup(props, {
    slots
  }) {
    function onClick(evt) {
      preventDefault(evt);
    }
    return () => {
      const {
        max,
        ...restProps
      } = props;
      const nodes = filterEmptyElement(slots.default ? slots.default() : []);
      if (nodes.length && nodes.length > max) {
        const firstNodes = take(nodes, max);
        const secondNodes = takeRight(nodes, nodes.length - max);
        const dropdownSlots = {
          overlay: () => {
            let _slot;
            return createVNode(Menu, {
              "selectedKeys": []
            }, _isSlot$2(_slot = secondNodes.map((item) => {
              return createVNode(Menu.Item, null, _isSlot$2(item) ? item : {
                default: () => [item]
              });
            })) ? _slot : {
              default: () => [_slot]
            });
          }
        };
        return createVNode(Space, restProps, {
          default: () => [firstNodes, createVNode(Dropdown, {
            "placement": "bottomRight"
          }, {
            default: () => [createVNode("a", {
              "class": cx$2("action", "action__primary"),
              "onClick": onClick
            }, [createTextVNode("...")])],
            ...dropdownSlots
          })]
        });
      }
      return createVNode(Space, restProps, _isSlot$2(nodes) ? nodes : {
        default: () => [nodes]
      });
    };
  }
});
Action.Group = Group;
const alert = "_alert_4h9gu_5";
const styles$1 = {
  "popup-container": "_popup-container_4h9gu_1",
  alert,
  "alert-container": "_alert-container_4h9gu_12",
  "alert-info-wrap": "_alert-info-wrap_4h9gu_17",
  "alert-content": "_alert-content_4h9gu_24",
  "alert-options": "_alert-options_4h9gu_30"
};
function _isSlot$1(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const cx$1 = classNames.bind(styles$1);
const Alert = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    selectedRowKeys: {
      type: Array,
      default: () => []
    },
    selectedRows: {
      type: Array,
      default: () => []
    },
    options: {
      type: Function,
      default: void 0
    },
    onCleanSelected: {
      type: Function,
      default: void 0
    }
  },
  emits: ["cleanSelected"],
  setup(props, {
    emit,
    slots
  }) {
    const popupContainer = ref(null);
    const {
      t
    } = useLocaleReceiver(["Table", "alert"]);
    function onCleanSelected() {
      emit("cleanSelected");
    }
    function getPopupContainer() {
      const plain = unref(popupContainer);
      return plain ? plain.$el || plain : plain;
    }
    return () => {
      let _slot;
      if (props.selectedRowKeys.length < 1)
        return null;
      const {
        selectedRowKeys,
        selectedRows
      } = props;
      const contentText = `${t("selected")} ${selectedRowKeys.length} ${t("item")}`;
      const defaultContent = createVNode(Space, {
        "size": 8
      }, {
        default: () => [createVNode(Fragment, null, [contentText]), createVNode(Action, {
          "onClick": onCleanSelected
        }, _isSlot$1(_slot = t("clear")) ? _slot : {
          default: () => [_slot]
        })]
      });
      const slotScope = {
        keys: selectedRowKeys,
        rows: selectedRows,
        cleanSelected: onCleanSelected
      };
      const customContent = getSlotVNode(slots, props, "default", slotScope);
      const optionsDom = getSlotVNode(slots, props, "options", slotScope);
      return createVNode("div", {
        "class": cx$1("alert")
      }, [createVNode(ConfigProvider, {
        "getPopupContainer": getPopupContainer
      }, {
        default: () => [createVNode("div", {
          "class": cx$1("popup-container"),
          "ref": popupContainer
        }, [createVNode("div", {
          "class": cx$1("alert-container")
        }, [createVNode("div", {
          "class": cx$1("alert-info-wrap")
        }, [createVNode("div", {
          "class": cx$1("alert-content")
        }, [customContent || defaultContent]), createVNode("div", {
          "class": cx$1("alert-options")
        }, [createVNode(Space, {
          "size": 16
        }, _isSlot$1(optionsDom) ? optionsDom : {
          default: () => [optionsDom]
        })])])])])]
      })]);
    };
  }
});
function mergePagination(pagination, t) {
  if (pagination === false)
    return false;
  const { current, pageSize, showTotal, total } = pagination || {};
  const loopShowTotal = (total2, range) => {
    return `${t("range")} ${range[0]}-${range[1]} ${t("total")} ${total2} ${t("item")}`;
  };
  return {
    ...pagination,
    total: total || 0,
    current: current || 1,
    pageSize: pageSize || 10,
    showSizeChanger: true,
    showTotal: showTotal || loopShowTotal
  };
}
function validatePaginate(paginate) {
  const { current, pageSize, total } = paginate;
  const maxCurrent = Math.ceil(total / pageSize);
  const overflow = total && current > maxCurrent;
  const nextCurrent = overflow ? maxCurrent : current;
  return { ...paginate, current: nextCurrent };
}
function useFetchData(request, props, options) {
  const { t } = useLocaleReceiver(["Table", "pagination"]);
  const { onLoad, onRequestError } = options || {};
  const context = shallowReactive({
    loading: false,
    dataSource: props.dataSource || [],
    pagination: mergePagination(props.pagination, t)
  });
  const queryParams = shallowRef({});
  const filterParams = shallowRef({});
  const sortParams = shallowRef({});
  function getRequestData() {
    const params = { ...unref(queryParams), ...props.params };
    const paginate = pick(context.pagination, ["current", "pageSize"]);
    const filter = { ...unref(filterParams) };
    const sort = { ...unref(sortParams) };
    return { params, paginate, filter, sort };
  }
  async function fetchData() {
    if (!isFunction(request) || context.loading)
      return;
    context.loading = true;
    try {
      const { params, paginate, filter, sort } = getRequestData();
      const { success, data, total } = await request(params, paginate, filter, sort);
      if (success !== false) {
        if (props.postData && isFunction(props.postData)) {
          const nextData = props.postData(data, params, paginate, filter, sort);
          context.dataSource = nextData || [];
        } else {
          context.dataSource = data || [];
        }
        onLoad && onLoad(data);
        setPaginate({ total: total || data.length });
      }
    } catch (err) {
      if (!onRequestError)
        throw new Error(err);
      onRequestError && onRequestError(err);
    } finally {
      context.loading = false;
    }
  }
  const stopWatchDataSource = watch(() => props.dataSource, (value) => {
    context.dataSource = value || [];
  }, { immediate: true });
  const stopWatchPagination = watch(() => context.pagination, (value, oldValue) => {
    if (value && oldValue && (value.current !== oldValue.current || value.pageSize !== oldValue.pageSize)) {
      oldValue.pageSize !== value.pageSize && setPaginate({ current: 1 });
      fetchData();
    }
  });
  const stopWatchParams = watch([() => props.params, queryParams], () => {
    setPaginate({ current: 1 });
    fetchData();
  });
  function setQueryParams(params) {
    queryParams.value = params;
  }
  function setPaginate(paginate) {
    if (context.pagination === false)
      return;
    const needPaginate = { ...context.pagination, ...paginate };
    context.pagination = validatePaginate(needPaginate);
  }
  function setFilter(filter) {
    filterParams.value = filter;
  }
  function setSort(sort) {
    sortParams.value = sort;
  }
  function onReload(resetCurrent = false) {
    resetCurrent && setPaginate({ current: 1 });
    fetchData();
  }
  function onStop() {
    stopWatchDataSource && stopWatchDataSource();
    stopWatchPagination && stopWatchPagination();
    stopWatchParams && stopWatchParams();
  }
  tryOnScopeDispose(onStop);
  return { context, onReload, getRequestData, setQueryParams, setPaginate, setFilter, setSort };
}
function getEllipsis(column) {
  if (column.ellipsis && column.ellipsis.showTitle === false) {
    return false;
  }
  return column.ellipsis;
}
function getCopyable(column, text) {
  if (column.copyable && text) {
    if (isObject(column.copyable)) {
      return { text, ...column.copyable };
    }
    return { text, tooltip: true };
  }
  return false;
}
function customRender(oldColumn, emptyText) {
  return function({ text, record, index: index2, column }) {
    if (oldColumn.customRender && isFunction(oldColumn.customRender)) {
      const oldCustomRender = oldColumn.customRender;
      return oldCustomRender.apply(null, [text, record, index2, column]);
    }
    if (oldColumn.valueEnum && isObject(oldColumn.valueEnum) && !isEmpty(text)) {
      return valueEnumToText(text, oldColumn.valueEnum);
    }
    if ((oldColumn.copyable || oldColumn.ellipsis) && !isEmpty(text)) {
      const copyable = getCopyable(oldColumn, text);
      const ellipsis = getEllipsis(oldColumn);
      return h(TypographyText, { copyable, ellipsis, content: text });
    }
    return isEmpty(text) ? emptyText : text;
  };
}
function useCustomRender(props) {
  const columns = computed(() => {
    return genCustomRenderColumns(props.columns || []);
  });
  function genCustomRenderColumns(columns2) {
    return columns2.map((column, index2) => {
      const key = column.key || column.dataIndex || String(index2);
      const tempColumns = { ...column, key };
      if (column.children && isArray(column.children)) {
        tempColumns.children = genCustomRenderColumns(column.children);
      } else {
        tempColumns.customRender = customRender(column, props.emptyText);
      }
      return tempColumns;
    }).filter((column) => !column.hideInTable);
  }
  return { columns };
}
function genColumnsMap(columns) {
  const values = columns.map((column, index2) => {
    const checked = isBoolean(column.checked) ? column.checked : true;
    const disable = column.filters || column.sorter ? true : column.disable;
    return [column.key, { ...column, checked, disable, order: index2 }];
  });
  return fromPairs(values);
}
function useTableColumns(props) {
  const { columns: baseColumns } = useCustomRender(props);
  const columnsMap = ref({});
  const columns = computed(() => {
    const values = map(columnsMap.value, (column) => column);
    return values.sort((a, b) => a.order - b.order);
  });
  const stopWatchColumns = watch(baseColumns, (columns2) => {
    columnsMap.value = genColumnsMap(columns2);
  }, { immediate: true });
  function setColumnsMap(values) {
    const columns2 = unref(baseColumns);
    if (values && isObject(values)) {
      columnsMap.value = values;
    } else {
      columnsMap.value = genColumnsMap(columns2);
    }
  }
  function onStop() {
    stopWatchColumns && stopWatchColumns();
  }
  tryOnScopeDispose(onStop);
  return { columns, columnsMap, setColumnsMap };
}
function mergeRowSelection(defaultValue, rowSelection) {
  const { selectedRowKeys, ...restValue } = defaultValue;
  return { selectedRowKeys, ...rowSelection, ...restValue };
}
function useRowSelection(props) {
  const needRowSelection = mergeRowSelection({
    selectedRowKeys: [],
    selectedRows: [],
    onChange
  }, props.rowSelection);
  const rowSelection = shallowReactive(needRowSelection);
  function setSelectedRowKeys(keys, rows) {
    rowSelection.selectedRowKeys = keys;
    if (keys.length !== rows.length) {
      const { rowKey = "key" } = props;
      const { selectedRows } = rowSelection;
      rowSelection.selectedRows = keys.map((key) => {
        const oldRow = selectedRows.find((row) => row[rowKey] === key);
        const newRow = rows.find((row) => row[rowKey] === key);
        return oldRow || newRow;
      });
    } else {
      rowSelection.selectedRows = rows;
    }
  }
  function onChange(keys, rows, info) {
    const { rowSelection: rowSelection2 } = props;
    if (isObject(rowSelection2) && isFunction(rowSelection2.onChange)) {
      rowSelection2.onChange(keys, rows, info);
    }
    setSelectedRowKeys(keys, rows);
  }
  function onCleanSelected() {
    setSelectedRowKeys([], []);
  }
  return { rowSelection, onCleanSelected };
}
const styles = {
  "popup-container": "_popup-container_116in_1"
};
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const cx = classNames.bind(styles);
const BaseTableSize = "small";
const Table = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: tableProps,
  emits: ["change", "paginateChange", "filterChange", "sortChange", "loadingChange", "export", "sizeChange", "columnsChange", "load", "requestError", "finish", "reset"],
  setup(props, {
    emit,
    attrs,
    slots,
    expose
  }) {
    const popupContainer = ref(null);
    const tableRef = ref(null);
    const tableSize = ref(props.size || BaseTableSize);
    const {
      context: requestProps,
      onReload,
      getRequestData,
      setQueryParams,
      setPaginate,
      setFilter,
      setSort
    } = useFetchData(props.request, props, {
      onLoad: (dataSource) => emit("load", dataSource),
      onRequestError: (err) => emit("requestError", err)
    });
    const {
      columns,
      columnsMap,
      setColumnsMap
    } = useTableColumns(props);
    const {
      rowSelection,
      onCleanSelected
    } = useRowSelection(props);
    const tableColumns = computed(() => {
      return unref(columns).filter((column) => column.checked);
    });
    watch(() => requestProps.loading, (value) => {
      emit("loadingChange", value);
    });
    watch(tableColumns, (value) => {
      emit("columnsChange", value);
    }, {
      immediate: true
    });
    onMounted(() => {
      const ifReload = props.manualRequest === false && props.search === false;
      ifReload && onReload(true);
    });
    function onChange(paginate, filters, sorter, extra2) {
      emit("change", paginate, filters, sorter, extra2);
      const finalAction = {
        paginate: () => {
          onPaginateChange(paginate);
        },
        filter: () => {
          onFilterChange(filters);
        },
        sort: () => {
          if (isArray(sorter)) {
            const data = sorter.reduce((pre, value) => {
              return {
                ...pre,
                [`${value.field}`]: value.order
              };
            }, {});
            onSortChange(data);
          } else {
            const sorterOfColumn = sorter.column && sorter.column.sorter;
            const isSortByField = sorterOfColumn && sorterOfColumn.toString() === sorterOfColumn;
            const key = `${isSortByField ? sorterOfColumn : sorter.field}`;
            const data = {
              [key]: sorter.order
            };
            onSortChange(data);
          }
        }
      };
      finalAction[extra2.action] && finalAction[extra2.action]();
    }
    function onPaginateChange(paginate) {
      const nextPaginate = pick(paginate, ["current", "pageSize"]);
      setPaginate && setPaginate(nextPaginate);
      emit("paginateChange", nextPaginate);
    }
    function onFilterChange(filter) {
      const nextFilter = omitNil(filter);
      setFilter && setFilter(nextFilter);
      emit("filterChange", nextFilter);
    }
    function onSortChange(sort) {
      const nextSort = omitNil(sort);
      setSort && setSort(nextSort);
      emit("sortChange", nextSort);
    }
    function onFinish(values) {
      const nextValues = omitNil(values);
      if (isFunction(props.beforeSearchSubmit)) {
        const result2 = props.beforeSearchSubmit(nextValues);
        setQueryParams && setQueryParams(result2 || {});
      } else {
        setQueryParams && setQueryParams(nextValues);
      }
      emit("finish", nextValues);
    }
    function onReset(value) {
      emit("reset", value);
    }
    function onExport() {
      const data = getRequestData && getRequestData();
      const exportParams = {
        pageData: requestProps.dataSource,
        tableElement: unref(tableRef),
        requestData: data || {}
      };
      emit("export", exportParams);
    }
    function setTableSize(value) {
      tableSize.value = value;
      emit("sizeChange", value);
    }
    function getPopupContainer() {
      const plain = unref(popupContainer);
      return plain ? plain.$el || plain : plain;
    }
    createSharedContext({
      requestProps,
      tableSize,
      setTableSize,
      columns,
      columnsMap,
      setColumnsMap,
      onReload
    });
    expose({
      size: tableSize,
      columns: tableColumns,
      reload: onReload,
      getRequestData,
      cleanSelected: onCleanSelected
    });
    return () => {
      const {
        search: propsSearch,
        columns: propsColumns,
        manualRequest
      } = props;
      const {
        toolbar: propsToolbar,
        options: propsOptions,
        rowSelection: propsRowSelection
      } = props;
      const renderSearch = () => {
        const searchProps = {
          ...propsSearch,
          loading: requestProps.loading,
          columns: propsColumns,
          manualRequest,
          onFinish,
          onReset
        };
        const customSearch = getSlotVNode(slots, {}, "search", searchProps);
        return customSearch || createVNode(Search, searchProps, null);
      };
      const renderToolbar = () => {
        const titleSlot = getSlot(slots, props, "title");
        const actionsSlot = getSlot(slots, props, "actions");
        const settingsSlot = getSlot(slots, props, "settings");
        const toolbarSlots = {
          title: titleSlot,
          actions: actionsSlot,
          settings: settingsSlot
        };
        const toolbarProps = {
          options: propsOptions,
          onExport
        };
        return createVNode(Toolbar, toolbarProps, toolbarSlots);
      };
      const renderAlert = () => {
        const alertSlot = getSlot(slots, props, "alert");
        const alertOptionsSlot = getSlot(slots, props, "alertOptions");
        const alertSlots = {
          default: alertSlot,
          options: alertOptionsSlot
        };
        const alertProps = {
          selectedRowKeys: rowSelection.selectedRowKeys,
          selectedRows: rowSelection.selectedRows,
          onCleanSelected
        };
        return createVNode(Alert, alertProps, alertSlots);
      };
      const cardBodyStyle = propsToolbar ? {
        paddingBlock: "16px",
        paddingBlockStart: "0"
      } : {
        paddingBlock: "16px"
      };
      const needTableProps = {
        ...attrs,
        ...pick(props, Object.keys(Table$1.props)),
        ...requestProps,
        size: unref(tableSize),
        columns: unref(tableColumns),
        rowSelection: propsRowSelection !== false ? rowSelection : void 0,
        onChange
      };
      const needTableSlots = omit(slots, ["search", "extra", "title", "actions", "settings", "alert", "alertOptions"]);
      const extraSlotScope = {
        loading: requestProps.loading,
        pageData: requestProps.dataSource,
        pagination: requestProps.pagination
      };
      const extraDom = getSlotVNode(slots, props, "extra", extraSlotScope);
      return createVNode("div", {
        "class": cx("table")
      }, [propsSearch !== false && renderSearch(), extraDom && createVNode(Extra, null, _isSlot(extraDom) ? extraDom : {
        default: () => [extraDom]
      }), createVNode(Card, {
        "bodyStyle": cardBodyStyle
      }, {
        default: () => [propsToolbar && renderToolbar(), propsRowSelection !== false && renderAlert(), createVNode(ConfigProvider, {
          "getPopupContainer": getPopupContainer
        }, {
          default: () => [createVNode("div", {
            "class": cx("popup-container"),
            "ref": popupContainer
          }, [createVNode("div", {
            "class": cx("table-wrapper"),
            "ref": tableRef
          }, [createVNode(Table$1, needTableProps, needTableSlots)])])]
        })]
      })]);
    };
  }
});
const index = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    ...Table.props,
    editable: {
      type: Object,
      default: () => ({})
    },
    controlled: {
      type: Boolean,
      default: false
    },
    onChange: {}
  },
  setup(props, {
    slots
  }) {
    return () => {
      return createVNode(Table, {
        "search": false,
        "options": false,
        "pagination": false
      }, null);
    };
  }
});
export {
  Action,
  Group as ActionGroup,
  BaseField,
  BaseForm,
  BaseSearch,
  Cascader,
  Checkbox,
  index$3 as CustomFields,
  Date,
  DateMonth,
  DateMonthRange,
  DateQuarter,
  DateQuarterRange,
  DateRange,
  DateTime,
  DateTimeRange,
  DateWeek,
  DateWeekRange,
  DateYear,
  DateYearRange,
  Descriptions,
  Item$1 as DescriptionsItem,
  index$1 as DrawerForm,
  index as EditableTable,
  ExitFullscreenOutlined,
  Field,
  Form,
  Dependency as FormDependency,
  Group$1 as FormGroup,
  Item as FormItem,
  List as FormList,
  FullscreenOutlined,
  HamburgerOutlined,
  HocField,
  IconFont as Icon,
  Loading,
  MenuOutlined,
  index$2 as ModalForm,
  index$4 as Navbar,
  Number$1 as Number,
  Password,
  PasswordFilled,
  QueryFilter,
  Radio,
  Select,
  index$6 as Sidebar,
  Slider,
  Submitter,
  Switch,
  Table,
  index$5 as TagsNav,
  Text$1 as Text,
  TextArea,
  Time,
  TimeRange,
  TreeSelect,
  UserFilled,
  useForm,
  useFormInstance
};
