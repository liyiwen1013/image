$(function(){

    //��ʼ���ֲ�ͼ
    $("#slider").slidebox({
        boxh: 430,//���ӵĸ߶�
        w: 1000,//ͼƬ�Ŀ��
        h: 400,//ͼƬ�ĸ߶�
        isShow: true,//�Ƿ���ʾ������
        isShowBtn: true,//�Ƿ���ʾ���Ұ�ť
        controltop: 10,//���ư�ť����ƫ�Ƶ�λ��,Ҫ����ť�����ƶ�   ���ȱ�֤boxh �߶�>ͼƬ h
        controlsW: 12,//���ư�ť���
        controlsH: 12,//���ư�ť�߶�
        radius: 6//���ư�ťԲ�Ƕ���
    });  

    //��ʼ���ֲ�ͼ
    $(".eSlider").slidebox({
        boxh: 218,//���ӵĸ߶�
        w: 328,//ͼƬ�Ŀ��
        h: 218,//ͼƬ�ĸ߶�
        isShow: true,//�Ƿ���ʾ������
        isShowBtn: true,//�Ƿ���ʾ���Ұ�ť
        controltop: 10,//���ư�ť����ƫ�Ƶ�λ��,Ҫ����ť�����ƶ�   ���ȱ�֤boxh �߶�>ͼƬ h
        controlsW: 30,//���ư�ť���
        controlsH: 6,//���ư�ť�߶�
        radius: 6//���ư�ťԲ�Ƕ���
    });  

    /* 
        ������ѡ��� 

            ˼·�� ������������˵�(#ebook .ebookLeft .cTitle li),��ʾ��Ӧ�Ĳ�Ʒ��#ebook .ebookProduct > ul��
    
    */
    $("#ebook .ebookLeft .cTitle li").mouseover(function(){

        //����ǰ�˵���Ӽ�����ʽ
        $(this).addClass("active").siblings().removeClass("active");

        //��ȡ��ǰ�˵�������
        let index = $(this).index();

        //��ʾ��Ӧ��Ʒ
        $("#ebook .ebookProduct > ul").removeClass("active").eq(index).addClass("active");

    })



    /* 
        �������ַ���

            ���� 
                1. �������(#ebook .ebookRight li)
                2. ��ʾ��ǰli��������� div
                3. ���ص�ǰli����ı��� h4
    */

    $("#ebook .ebookRight li").mouseenter(function(){

        //�� = ���� ����li�����div
        $(this).siblings().find("div").hide();

        //�� = ��ʾ ����li�����h4
        $(this).siblings().find("h4").show();

        // 2. ��ʾ��ǰli��������� div
        $("div",this).show();

        // 3. ���ص�ǰli����ı��� h4
        $("h4",this).hide();

    });


    /* 
        ¥�����
            ����1�� 
                ����¥�㣺 �ı䱳��ɫ  ��ȱ�Ϊ80  �л��˱���ͼ��  ��ʾ����

                �Ƴ�¥�㣺 �ص���̬

                ˼�룺 
                        1. ����ɫ ��Ϊ ÿ��¥��li���Զ�������ֵ
                        2. ���������鱣�汳��ɫ

            ����2�� 
                ���¥�� ��ת����Ӧ��¥�����

                ������⣺ ���¥�㣬�ù����� ������ ��Ӧ¥����� ���� ��������ڶ����ľ���


    */

    //�������鱣�汳��ɫ
    let bgColor = ["#93d46f","#f65727","#bb9dee","#ff7394","#c2ec51"];


    $("#floor li").hover(function(){

        //��ȡ��ǰ¥�������ֵ
        let index = $(this).index();

        //���õ�ǰ¥�����ʽ
        $(this).css({
            "background-color": bgColor[index],
            "width": "80px",
            "background-position-x": "-40px"
        })


    },function(){

        $(this).css({
            "background-color": "",
            "width": "",
            "background-position-x": ""
        })

    }).click(function(){

        //��ȡ��ǰ���¥�������
        let index = $(this).index();

        //�ҵ�¥�� ��Ӧ�� ¥����� ����������ڵĶ�������
        let sTop = $(".floorBox").eq(index).offset().top
        
        //���ù�������λ��
        $("html,body").animate({ "scrollTop": sTop - 20 },500)
        
    })


    /* 
        �̶�����������
            ���� ���� �������� �ж������������ ������ 1000 ����ʾ��������fixedTopBox
    
    */
    $(window).scroll(function(){

        //��ȡ��������
        let sTop = $("html,body").scrollTop();

        console.log(sTop);
        
        
        //�ж�
        if(sTop > 1000){
            //��ʾ
            $("#fixedTopBox").stop(true,false).slideDown();

            //��search����׷�ӵ� fixedTopBox
            $(".search").appendTo("#fixedTopBox")


        }else{
            //����
            $("#fixedTopBox").stop(true,false).slideUp();

            //��search����׷�ӵ�searchBox
            $(".search").appendTo(".searchBox")
        }
        


    });






})