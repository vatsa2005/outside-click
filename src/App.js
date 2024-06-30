import "./App.css";
import { useEffect, useRef } from "react";
import useOutsideClick from "./useOustsideClick";

function App() {
  const ref = useRef(null);
  const os = useOutsideClick(ref, "display", "flex"); // returns a function. First param is ref, second param is the class name, third param is thed display type.

  return (
    <div className="App">
      <div className="para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at
        ipsum orci. Maecenas risus augue, tempus sed mattis ut, lobortis mollis
        nunc. Suspendisse nec faucibus tortor, nec imperdiet felis. Mauris a
        nunc leo. Sed egestas quam vel enim aliquet, eu accumsan augue euismod.
        Nullam ornare eros a orci imperdiet, vitae convallis ipsum posuere.
        Suspendisse ut semper odio. Sed pellentesque, mauris sed lobortis
        faucibus, mauris diam scelerisque ante, et luctus nibh mi vitae nisl.
        Maecenas efficitur, leo id dignissim tristique, enim eros aliquet arcu,
        ac sollicitudin massa tellus non ligula. Fusce orci eros, auctor sed
        nibh rhoncus, cursus efficitur tellus. Aliquam sit amet lacus ut magna
        condimentum egestas ultricies sed orci. Integer et urna vel quam
        tincidunt egestas. Praesent semper risus sit amet neque interdum
        finibus. Donec hendrerit urna sit amet vulputate bibendum. Integer
        rhoncus molestie eros, sed vulputate turpis laoreet in. Quisque dapibus
        lectus enim, non faucibus dolor euismod in. Donec porttitor, odio at
        interdum interdum, leo erat euismod quam, id tristique nisi dui sit amet
        tortor. Aliquam erat volutpat. Donec at arcu at quam tincidunt fermentum
        nec a nulla. Suspendisse congue dolor non felis malesuada, sagittis
        pellentesque urna consectetur. Vestibulum tempus tempus nisl, vel
        scelerisque neque. Morbi lobortis molestie purus ac fringilla. Quisque
        facilisis velit ut felis rhoncus cursus. Nam et metus condimentum,
        feugiat felis vel, pretium libero. Aenean sit amet leo bibendum,
        efficitur ante non, accumsan odio. Vivamus sed diam et nisi ullamcorper
        faucibus sit amet in erat. Suspendisse accumsan eu velit a pulvinar.
        Cras ligula ex, molestie sit amet elit non, eleifend condimentum tortor.
        Phasellus sed tellus accumsan, congue mauris hendrerit, hendrerit felis.
        Maecenas lectus ligula, ultrices ut fermentum eu, dictum at augue.
        Quisque hendrerit et est eu consequat. Curabitur vitae tincidunt lacus.
        Pellentesque odio elit, placerat ut pulvinar at, aliquet vitae libero.
        Integer quis justo eget mi vehicula egestas. Phasellus blandit orci at
        erat euismod, eu aliquet mi aliquet. Ut ac vulputate orci, eu vulputate
        arcu. Nunc porttitor, eros nec efficitur auctor, justo tellus convallis
        lorem, in volutpat enim arcu vitae ipsum. Maecenas lacinia, lacus id
        euismod aliquet, turpis lorem malesuada justo, eget semper enim diam nec
        dolor. Phasellus a sollicitudin velit, non dapibus mi. Fusce suscipit,
        urna sed congue fermentum, arcu tortor cursus dolor, vel maximus mi
        mauris laoreet arcu. Maecenas volutpat nibh nec tellus mollis
        ullamcorper. Sed ac nisl sed massa sodales malesuada vel ac nibh. Proin
        ligula ligula, mollis eu venenatis eu, viverra ac augue. Pellentesque
        scelerisque mi ac eros tincidunt tincidunt. Quisque pellentesque congue
        risus. Cras lacus lorem, semper vel nulla vitae, finibus sollicitudin
        sapien. Proin fringilla, neque a molestie hendrerit, augue erat
        tristique erat, bibendum placerat est massa at orci. Proin nec tincidunt
        eros, a suscipit ante. Vivamus sed ligula in orci vehicula fermentum
        ultrices vitae augue. Nunc dictum accumsan sodales. Maecenas a arcu
        libero. Vivamus sit amet congue magna. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Etiam ac lorem
        vitae diam porttitor aliquam sed ac ante. Proin facilisis nec velit at
        tempor. Phasellus dictum bibendum viverra. Vestibulum sagittis lorem a
        nisl bibendum porta. Aliquam erat volutpat. Maecenas ut sollicitudin
        libero. Integer turpis nulla, laoreet sit amet ipsum eget, elementum
        porttitor tortor. Aliquam nec nunc non odio pulvinar porta vitae sit
        amet diam. Maecenas pulvinar, nisi quis aliquet scelerisque, purus massa
        sagittis elit, a condimentum massa augue nec tellus. Phasellus
        scelerisque scelerisque nisi a rutrum. Etiam hendrerit, nisl non
        elementum vestibulum, nulla metus placerat magna, id mattis ex augue sed
        ex. Suspendisse non nunc accumsan, fermentum purus et, varius nibh.
        Aenean eu metus eget nunc viverra vestibulum at vel augue. Fusce semper
        bibendum tempor. Vestibulum non erat metus. Integer eu sagittis ante,
        mattis iaculis felis. Aliquam sodales justo risus, consequat viverra leo
        dictum eu. Cras libero justo, dictum nec metus vel, tempus pulvinar
        nibh. Vivamus viverra tellus vel lectus tincidunt accumsan. Nullam
        tristique ex sapien, in dignissim quam fermentum a. Praesent ut erat ac
        ligula pellentesque pulvinar. Curabitur eu quam id lectus ultricies
        congue. Duis rutrum accumsan nisi, sit amet aliquet lorem mattis sit
        amet. Maecenas a risus purus. Ut eu consequat mi. Aliquam dapibus varius
        quam id imperdiet. Suspendisse vitae finibus sem. Praesent purus ante,
        porta sed faucibus at, vulputate at ante. Phasellus sed dapibus erat.
        Fusce sed faucibus purus. Morbi et tortor ac magna volutpat faucibus sit
        amet at est. Mauris vestibulum eleifend sapien eu sagittis. Aliquam nec
        orci convallis, vehicula metus id, egestas nulla. Sed lacinia lectus
        lectus, eu pellentesque ligula maximus id. Ut tempus congue mi, vel
        eleifend eros aliquet eu. Duis suscipit lacinia congue. Aliquam tellus
        felis, pulvinar hendrerit ornare id, tincidunt in nisl. Integer placerat
        a sem eget ultrices. Nulla vitae dui consequat, mollis quam in, posuere
        purus. Proin sit amet elit ut ante consectetur lobortis. Aenean maximus
        semper massa, sit amet semper lacus pharetra placerat. Duis condimentum
        elit in orci aliquet, eu vehicula leo rutrum. Praesent fringilla tortor
        sollicitudin purus mattis, nec faucibus felis semper. Nunc vel interdum
        tellus, vitae laoreet neque. Phasellus mollis arcu non enim consequat,
        nec suscipit purus semper. Mauris ultricies eu purus in pharetra.
        Aliquam euismod est et dapibus tempus. Morbi volutpat massa id velit
        sagittis, a elementum neque auctor. Phasellus commodo rutrum leo, in
        congue nisi iaculis vitae. Donec ac tortor nisi. Aliquam ut neque eu
        lacus commodo placerat. Duis nec neque dui. Morbi in condimentum diam.
        Proin ut nisi aliquam, mollis magna et, tincidunt mi. Ut at vulputate
        urna. Sed at quam mauris. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Cras sed lobortis magna, at
        sagittis metus. Donec faucibus arcu dolor, eu posuere justo auctor sit
        amet. Sed tortor erat, sagittis eget odio vitae, condimentum rutrum
        lorem. Nulla sem libero, viverra ac volutpat at, molestie dignissim
        massa. Fusce vitae scelerisque magna. Fusce tristique maximus dui sed
        congue. Curabitur sed auctor augue, vel tincidunt nisi. Sed molestie
        scelerisque neque, quis volutpat mauris auctor non. Vestibulum lacinia
        <button type="button" onClick={os}>
          Show Content
        </button>
        <div className="para__show_content" ref={ref}>
          justo quis ligula placerat commodo. Sed mattis laoreet tincidunt.
          Vivamus purus libero, consectetur ac nulla a, ultricies cursus risus.
          Curabitur tempor tincidunt mattis. Curabitur in enim rhoncus,
          fringilla magna vitae, placerat sapien. Nulla sollicitudin libero
          velit, quis laoreet augue pharetra non. In congue, sapien a porttitor
          molestie, enim enim imperdiet nisl, a suscipit neque nulla vel metus.
          Aenean enim metus, gravida id viverra aliquet, porttitor quis dolor.
          Pellentesque ornare porta metus, quis iaculis justo maximus sit amet.
          Suspendisse porta nunc non augue hendrerit, non feugiat tellus
          pretium. Donec ipsum felis, maximus sit amet vulputate at, lobortis
          sit amet lectus. Morbi erat velit, eleifend vitae convallis eu,
          facilisis et elit. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Nam fermentum enim a dui
          gravida, at aliquam nisl varius. Quisque velit nisi, vulputate eu
          cursus ut, auctor pulvinar nulla. Quisque lacinia urna quis nisl
          pharetra tempor. Ut vehicula nisi dolor, nec congue lectus rhoncus
          non. Phasellus vel nibh sit amet lectus viverra condimentum. Phasellus
          semper leo eget turpis iaculis pretium. Maecenas sed augue ut odio
          blandit ultricies. Donec id elit hendrerit, imperdiet erat a,
          condimentum ligula. Vivamus facilisis ligula a pretium dignissim.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Phasellus lorem justo, blandit eu massa quis,
          convallis facilisis velit. Aenean nec posuere mi. Maecenas gravida
          lorem eu fermentum suscipit. Vestibulum turpis enim, porttitor ac
          elementum et, placerat in nisl. Morbi rhoncus nunc risus, ac porta ex
          fermentum ac. Suspendisse vitae sapien imperdiet, imperdiet ligula
          vitae, consequat sem. Nunc et massa ut leo consectetur tincidunt vel
          vitae nulla. Nam hendrerit sed quam quis tincidunt. Nulla sed dictum
          nisi. Phasellus eu dolor a dolor auctor posuere in id erat. Duis
          tincidunt ut erat in varius. Suspendisse porttitor fermentum lacus non
          iaculis. Sed volutpat laoreet luctus. Aliquam fermentum vel turpis sed
          rutrum. Maecenas pretium fringilla risus, ut faucibus libero lacinia
          et. Ut quam diam, dignissim id mi ut, semper eleifend ipsum. Ut
          venenatis nisi non rutrum interdum. Donec posuere mollis ex dapibus
          posuere. Maecenas eget libero facilisis, aliquam turpis fermentum,
          fermentum quam. Fusce sodales malesuada tellus. Nam tempus faucibus
          purus, ac dignissim tellus interdum non. Morbi in diam id erat
          fermentum commodo. Nam nec turpis vel neque fermentum vehicula. Nunc
          dui erat, egestas et molestie sed, finibus et leo. Aliquam a
          sollicitudin ex, sed tincidunt risus. Nam lacinia sem nunc, eu
          dignissim turpis vulputate nec. Donec condimentum bibendum odio ut
          auctor. Integer sollicitudin pretium ipsum, nec sollicitudin ante
          cursus quis. Maecenas eros nisl, pretium vitae lobortis in, hendrerit
          in odio. Maecenas in lectus dignissim, accumsan purus et, dictum
          felis. In efficitur mattis diam et scelerisque. Aenean porttitor
          placerat justo, eget vulputate orci aliquet non. Ut urna ligula,
          lobortis non sapien lobortis, consectetur fringilla dolor. Maecenas
          eros felis, dignissim eget ipsum in, posuere tristique justo. Mauris
          leo metus, ultrices non mauris dapibus, facilisis dapibus lectus.
          Praesent eget eros purus. Sed placerat euismod finibus. Fusce maximus
          maximus ante vel suscipit. Donec sit amet fringilla est, vitae blandit
          arcu. Phasellus ut dictum tellus. Proin lobortis felis nec risus
          consequat placerat. Donec eu risus hendrerit, tempor risus ut,
          placerat nisl. Aliquam elementum diam lacus, ut ullamcorper ipsum
          imperdiet feugiat. Cras vehicula justo nibh, nec faucibus dolor semper
          id. Nunc nisl lorem, laoreet quis odio in, lobortis consectetur felis.
          Sed a elit porta, elementum ligula eu, euismod sem. Duis euismod velit
          sit amet sodales fermentum. Nulla vel imperdiet nunc. Aliquam aliquet,
          nulla quis suscipit volutpat, risus lectus ullamcorper nunc, ut
          consequat nulla turpis eget velit. Curabitur a nisl condimentum,
          luctus justo quis, eleifend nunc. Ut lobortis, sapien sed lobortis
          rutrum, lectus ante vulputate nibh, in consequat dui ipsum ut urna.
          Duis sagittis facilisis ullamcorper. Vestibulum faucibus ante
          lobortis, dignissim massa quis, vehicula sem. Sed viverra, tortor
          ornare finibus convallis, mauris ante pulvinar sapien, a mollis velit
          lectus ac justo. Vestibulum leo odio, laoreet ac viverra vel, molestie
          id nibh. Nunc pharetra justo eu dignissim porttitor. Maecenas nisi
          massa, dictum posuere dolor vulputate, iaculis tincidunt turpis.
          Phasellus convallis, nisi eget rutrum efficitur, sapien massa vehicula
          magna, vel efficitur velit lacus in justo. Suspendisse potenti. Nam eu
          interdum est, id tincidunt neque. Donec hendrerit odio sit amet
          fermentum mattis. Fusce non elit eros. In ut sapien sit amet justo
          dapibus viverra at a leo. Morbi vitae enim ut risus blandit volutpat
          quis quis mauris. Duis mollis nunc sit amet nulla suscipit, id
          placerat quam sagittis. Aliquam mollis rutrum orci, ac rhoncus metus
          cursus in. Cras eget nunc quis leo consequat cursus. Sed ut auctor
          enim. Cras faucibus eget ligula posuere euismod. Cras placerat leo
          rhoncus, faucibus dolor eget, tempor lacus. Duis nec mauris ut nibh
          fringilla maximus id a dolor. Praesent efficitur sit amet libero in
          ultricies. Integer quis erat fermentum, tristique ex sit amet,
          pharetra augue. Fusce dictum risus ac quam tincidunt facilisis et et
          lectus. Aliquam placerat justo dui, in lobortis ex sodales vitae.
          Fusce ornare interdum varius. Proin mollis odio eu placerat commodo.
          Nunc at pharetra lacus. Vivamus ut maximus quam. Etiam porta est sit
          amet lacus tempus euismod. Ut ullamcorper eros mi, sed sodales neque
          maximus vitae. Vivamus laoreet euismod quam non lobortis. Duis finibus
          felis nec metus porta, nec ultrices odio dapibus. Morbi iaculis
          ullamcorper ante, quis feugiat quam venenatis id. Duis volutpat
          aliquam lectus at molestie. In maximus finibus massa, non tempor diam
          laoreet eget. Etiam nisi tellus, auctor non mi ac, gravida rutrum sem.
          Sed consequat neque quis urna commodo, sed vulputate massa congue.
          Quisque ac iaculis elit. Praesent vitae sem pharetra ligula pharetra
          vulputate vel non massa. Nulla imperdiet auctor sagittis. Quisque ac
          leo tortor. In sit amet dignissim nisl. Etiam cursus suscipit mi, at
          aliquet dui imperdiet at. Praesent eget aliquet neque. Nam nibh dui,
          auctor a est sed, aliquam lobortis arcu.
        </div>
      </div>
    </div>
  );
}

export default App;
